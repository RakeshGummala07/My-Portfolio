import BlogOne from "../Pages/Blogs/BlogOne.jsx";

// Joins lines so snippets can contain backticks and ${...} safely.
const lines = (...rows) => rows.join("\n");


export const blogs = [
  {
    slug: "educollab-monolith-to-microservices",
    title:
      "Moving EduCollab from a monolith to microservices: what broke and what I learned",
    description:
      "How EduCollab went from one application to independently deployable Spring Boot services, and the bugs that taught me the most along the way.",
    date: "2026-Aug",
    tags: ["Spring Boot", "Microservices", "Docker"],
    blocks: [
      {
        type: "p",
        text: "EduCollab is an educational collaboration platform. I first built it as a monolith, then migrated it to **microservices**. It now has independently deployable services for auth, user profiles, enrollment, the social feed, chat, notifications and meetings, plus an admin service and an AI service added later.",
      },
      { type: "h2", text: "The stack" },
      {
        type: "ul",
        items: [
          "**Backend:** Spring Boot 3 on Java 21, behind Spring Cloud Gateway.",
          "**Frontend:** React with Redux Toolkit.",
          "**Data:** MySQL, MongoDB and Redis.",
          "**Events:** Kafka.",
          "**Files and video:** MinIO for storage and LiveKit for meetings.",
          "**AI:** Spring AI with Gemini and Qdrant.",
          "**Local environment:** Docker Compose.",
        ],
      },
      { type: "h2", text: "What changed when the monolith was split" },
      {
        type: "p",
        text: "In a monolith, a method call either works or throws. Between services, every call crosses a network, needs authentication, and can fail on its own. Most of the problems below only exist because of that boundary.",
      },
      { type: "h2", text: "Bugs that taught me the most" },
      {
        type: "ul",
        items: [
          "**Docker networking on WSL2.** Containers on Windows lost connectivity to each other. It taught me to check the Docker and WSL2 layer before assuming my own code was wrong.",
          "**JWT authentication between services.** Requests from users and requests from other services carry different credentials, so the authentication logic has to branch on the type of token.",
          "**LazyInitializationException.** This happens when a lazily loaded association is read after the Hibernate session has closed. The general remedy is to load what you need inside the transaction (a fetch join or a DTO projection) instead of letting entities leak into the web layer.",
          "**Race conditions on concurrent join calls.** Whenever code reads a state and then writes based on it, two simultaneous requests can both pass the check. A unique constraint, a lock or an atomic update closes that gap.",
          "**A NoSuchMethodError in Spring Cloud Gateway.** It was a version mismatch, fixed by upgrading to Spring Boot 3.3.6. I wrote it up in a separate post.",
          "**MinIO and LiveKit on Windows.** Both took careful configuration before they ran reliably in the local setup.",
        ],
      },
      { type: "h2", text: "A debugging habit that saved time" },
      {
        type: "p",
        text: "With many services in one Compose file, restarting everything after each change is slow. I rebuild only the service I changed:",
      },
      {
        type: "code",
        title: "Rebuild one service",
        language: "bash",
        code: "docker compose up -d --build meeting-service",
      },
      {
        type: "p",
        text: "It also makes it obvious which service a new error comes from, because everything else keeps running unchanged.",
      },
      {
        type: "callout",
        text: "The AI service is covered in the DevMind post, which walks through the retrieval-augmented generation (RAG) pipeline I built after EduCollab.",
      },
    ],
  },
  {
    slug: "devmind-rag-pipeline",
    title: "How DevMind answers questions about your codebase with RAG",
    description:
      "A walk through DevMind's pipeline: JGit, Kafka, Ollama embeddings, Qdrant and relevance-gated generation.",
    date: "2026-Sep",
    tags: ["RAG", "Kafka", "Qdrant", "Ollama"],
    blocks: [
      {
        type: "p",
        text: "DevMind connects to a GitHub repository so you can ask questions about its code. It is built from Spring Boot microservices. This post covers the retrieval-augmented generation (**RAG**) path: how a repository becomes searchable, and how a question becomes an answer.",
      },
      { type: "h2", text: "Step 1: ingest the repository" },
      {
        type: "ul",
        items: [
          "**Shallow clone with JGit.** Only the current files matter, not the full history, so a shallow clone keeps the download small and fast.",
          "**Language filtering.** Files that are not source code (or not a supported language) are skipped.",
          "**Chunking.** Files are split into smaller pieces so each embedding represents a focused part of the code.",
          "**Embeddings.** Each chunk is embedded with `nomic-embed-text` running on Ollama.",
          "**Storage.** The vectors are upserted into Qdrant. The pipeline is coordinated over Kafka, so ingestion runs in the background and reports its status.",
        ],
      },
      { type: "h2", text: "Step 2: answer a question" },
      {
        type: "p",
        text: "The question is embedded with the same model, because vectors from different models are not comparable. Qdrant returns the closest chunks. Before anything reaches the model, a **relevance gate** drops chunks that are not close enough, so the prompt contains useful context instead of noise. The model then generates an answer with Ollama, and the conversation is saved in MongoDB.",
      },
      {
        type: "code",
        title: "The idea in pseudo-Java",
        language: "java",
        code: lines(
          "// A simplified sketch of the flow, not DevMind's exact code",
          "List<Float> queryVector = embeddings.embed(question);",
          "List<Chunk> hits = vectorStore.search(repoId, queryVector, topK);",
          "List<Chunk> relevant = hits.stream()",
          "    .filter(hit -> hit.score() >= MIN_SCORE)",
          "    .toList();",
          "String prompt = promptBuilder.build(question, relevant);",
          "return llm.generate(prompt);",
        ),
      },
      { type: "h2", text: "Reusing retrieval for other features" },
      {
        type: "ul",
        items: [
          "**Pull-request review:** the diff is fetched from GitHub and the review findings are grounded in retrieved code, then fanned out through Kafka to the notification service.",
          "**Documentation generation:** README, architecture, API and onboarding documents use a wider retrieval window, since they need to cover more of the repository.",
        ],
      },
      { type: "h2", text: "Running models on a laptop with no GPU" },
      {
        type: "p",
        text: "I run Ollama locally on a laptop without a GPU and with limited Docker memory. Local inference is slow in that setup, which is one more reason to send the model less but better context. Relevance gating helps with both quality and speed.",
      },
      { type: "h2", text: "Deployment" },
      {
        type: "p",
        text: "The platform runs with Docker Compose for local development. It also has Kubernetes manifests (tested on Docker Desktop), Grafana provisioning, and a GitHub Actions pipeline that publishes images to GHCR.",
      },
    ],
  },
  {
    slug: "spring-cloud-gateway-nosuchmethoderror",
    title:
      "Fixing a NoSuchMethodError in Spring Cloud Gateway by aligning versions",
    description:
      "A startup crash in my API gateway came down to mismatched Spring versions. How to recognise this class of error and fix it.",
    date: "2026-July",
    tags: ["Spring Cloud", "Debugging", "Maven"],
    blocks: [
      {
        type: "p",
        text: "While building the gateway for EduCollab, the application failed with a `NoSuchMethodError` thrown from Spring Cloud Gateway. None of my own code called the missing method, which is the first clue about what kind of problem this is.",
      },
      { type: "h2", text: "What the error means" },
      {
        type: "p",
        text: "`NoSuchMethodError` is a linkage error. Some code was compiled against one version of a library, but at runtime a different version is on the classpath, and that version does not have the method. So this is a **version mismatch**, not a bug in your logic.",
      },
      { type: "h2", text: "Why it shows up with Spring Cloud" },
      {
        type: "p",
        text: "Each Spring Cloud release train supports specific Spring Boot versions. If Gateway and Spring Boot come from trains that do not match, Gateway can call framework methods that do not exist in the version you run. The compatibility table on spring.io lists which pairs are supported.",
      },
      { type: "h2", text: "How I fixed it" },
      {
        type: "p",
        text: "I upgraded the project to **Spring Boot 3.3.6**, which resolved the error. The important part is to let the parent POM and the BOM choose compatible versions, instead of pinning individual Spring artifacts yourself.",
      },
      {
        type: "code",
        title: "pom.xml (parent and BOM)",
        language: "xml",
        code: lines(
          "<parent>",
          "  <groupId>org.springframework.boot</groupId>",
          "  <artifactId>spring-boot-starter-parent</artifactId>",
          "  <version>3.3.6</version>",
          "</parent>",
          "",
          "<properties>",
          "  <!-- Pick the release train that supports your Boot version -->",
          "  <spring-cloud.version>YOUR-COMPATIBLE-TRAIN</spring-cloud.version>",
          "</properties>",
          "",
          "<dependencyManagement>",
          "  <dependencies>",
          "    <dependency>",
          "      <groupId>org.springframework.cloud</groupId>",
          "      <artifactId>spring-cloud-dependencies</artifactId>",
          "      <version>${spring-cloud.version}</version>",
          "      <type>pom</type>",
          "      <scope>import</scope>",
          "    </dependency>",
          "  </dependencies>",
          "</dependencyManagement>",
        ),
      },
      { type: "h2", text: "A checklist for next time" },
      {
        type: "ul",
        items: [
          "Read the first lines of the stack trace. Note which library calls the missing method.",
          "Run `mvn dependency:tree -Dincludes=org.springframework` to see the versions that are actually on the classpath.",
          "Compare them with the Spring Cloud compatibility table.",
          "Align versions through the parent POM and BOM, not by pinning single artifacts.",
          "Rebuild the affected service image (`docker compose up -d --build api-gateway`) so you are not testing a stale one.",
        ],
      },
    ],
  },
  {
    slug: "activity-tag-pattern-react",
    title: "The ActivityTag Pattern in React",
    description:
      "Learn how to build reusable UI activity indicators using React components, with clean code examples and real use cases.",
    date: "2025-11-20",
    tags: ["React", "UI"],
    Component: BlogOne,
  },
].sort((a, b) => b.date.localeCompare(a.date));

export const getPost = (slug) => blogs.find((post) => post.slug === slug);

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
