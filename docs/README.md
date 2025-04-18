# RynexLLM 🚀

`rynexllm` is a collection of Rust crates designed to help you create advanced LLM applications such as chatbots, agents, and more. As a comprehensive LLM-Ops platform we have strong support for both cloud and locally-hosted LLMs. We also provide robust support for prompt templates and chaining together prompts in multi-step chains, enabling complex tasks that LLMs can't handle in a single step. We also provide vector store integrations making it easy to give your model long-term memory and subject matter knowledge. This empowers you to build sophisticated applications.

## Examples 💡

To help you get started, here is an example demonstrating how to use `rynexllm`. You can find more examples in the [examples folder](/crates/rynexllm-openai/examples) in the repository.

```rust
let exec = executor!()?;
let res = prompt!(
    "You are a robot assistant for making personalized greetings",
    "Make a personalized greeting for Joe"
)
.run(parameters()!, &exec)
.await?;
println!("{}", res);
```

[➡️ **tutorial: get started with rynexllm**](https://sobelio.github.io/rynexllm/docs/getting-started-tutorial/index)
[➡️ **quick-start**: Create project based on our template](https://github.com/sobelio/rynexllm-template/generate)

## Features 🌟

- **Prompt templates**: Create reusable and easily customizable prompt templates for consistent and structured interactions with LLMs.
- **Chains**: Build powerful chains of prompts that allow you to execute more complex tasks, step by step, leveraging the full potential of LLMs.
- **ChatGPT support**: Supports ChatGPT models, with plans to add OpenAI's other models in the future.
- **LLaMa support**: Provides seamless integration with LLaMa models, enabling natural language understanding and generation tasks with Facebook's research models.
- **Alpaca support**: Incorporates support for Stanford's Alpaca models, expanding the range of available language models for advanced AI applications.
- **`llm.rs` support**: Use llms in rust without dependencies on C++ code with our support for `llm.rs`
- **Tools**: Enhance your AI agents' capabilities by giving them access to various tools, such as running Bash commands, executing Python scripts, or performing web searches, enabling more complex and powerful interactions.
- **Extensibility**: Designed with extensibility in mind, making it easy to integrate additional LLMs as the ecosystem grows.
- **Community-driven**: We welcome and encourage contributions from the community to help improve and expand the capabilities of `rynexllm`.

## Getting Started 🚀

To start using `rynexllm`, add it as a dependency in your `Cargo.toml` (you need Rust 1.65.0 or newer):

```toml
[dependencies]
rynexllm = "0.12.0"
rynexllm-openai = "0.12.0"
```

The examples for `rynexllm-openai` require you to set the `OPENAI_API_KEY` environment variable which you can do like this:

```bash
export OPENAI_API_KEY="sk-YOUR_OPEN_AI_KEY_HERE"
```

Then, refer to the [documentation](https://docs.rs/rynexllm) and [examples](/crates/rynexllm-openai/examples) to learn how to create prompt templates, chains, and more.
.
## Contributing 🤝

**We warmly welcome contributions from everyone!** If you're interested in helping improve `rynexllm`, please check out our [`CONTRIBUTING.md`](/docs/CONTRIBUTING.md) file for guidelines and best practices.

## License 📄

`rynexllm` is licensed under the [MIT License](/LICENSE).

## Connect with Us 🌐

If you have any questions, suggestions, or feedback, feel free to open an issue or join our [community discord](https://discord.gg/kewN9Gtjt2). We're always excited to hear from our users and learn about your experiences with `rynexllm`.

We hope you enjoy using `rynexllm` to unlock the full potential of Large Language Models in your projects. Happy coding! 🎉
