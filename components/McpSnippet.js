const SNIPPET = `# 1. buat PAT di console, sambungkan ke MCP client kamu
# 2. minta agent-nya deploy:

quick_apps_create({
  organization: "first-1741110886",
  name:          "my-next-app",
  repo_url:      "https://github.com/<kamu>/my-next-app",
  branch:        "main",
  node_version:  "20",
  install_command: "npm ci",
  build_command:   "npm run build",
  output_dir:      ".next",
  artifact_mode:   "runnable_bundle",
  artifact_profile: "nextjs",
  auto_deploy:     true,
})`;

const TOKEN = "quick_apps_create";

export default function McpSnippet() {
  const lines = SNIPPET.split("\n");

  return (
    <pre className="overflow-x-auto border border-line bg-black p-4 font-mono text-xs leading-relaxed sm:text-[13px]">
      <code>
        {lines.map((line, index) => {
          if (line.startsWith("#")) {
            return (
              <span key={index} className="text-haze">
                {line}
                {"\n"}
              </span>
            );
          }
          const at = line.indexOf(TOKEN);
          if (at !== -1) {
            return (
              <span key={index} className="text-fog">
                {line.slice(0, at)}
                <span className="text-brand">{TOKEN}</span>
                {line.slice(at + TOKEN.length)}
                {"\n"}
              </span>
            );
          }
          return (
            <span key={index} className="text-fog">
              {line}
              {"\n"}
            </span>
          );
        })}
      </code>
    </pre>
  );
}
