# CyborgDB Examples

Example notebooks demonstrating encrypted vector search with [CyborgDB](https://cyborg.co) - protecting your embeddings from vector inversion attacks and data breaches.

## Why Encrypt Embeddings?

Vector embeddings capture semantic meaning from your data. Recent research shows that machine learning attacks can reconstruct original text from unencrypted embeddings stored in vector databases. CyborgDB uses homomorphic encryption to protect your vectors while maintaining full search functionality.

## Examples

### 1. Encrypted RAG Chatbot ([`encrypted-rag/`](./encrypted-rag/))

A production-ready RAG chatbot with end-to-end encrypted vector search. Upload documents, ask questions, and see the difference between plaintext and encrypted vectors.

- Single-node CyborgDB service with an on-disk encrypted index — no external database required
- OpenAI integration for LLM responses (an [NVIDIA NIM variant](./encrypted-rag/encrypted-rag-chatbot-nim.ipynb) keeps the LLM on-prem too)
- Gradio web interface
- Runs on Google Colab or locally

**[Open in Colab](https://colab.research.google.com/github/cyborginc/cyborgdb-examples/blob/main/encrypted-rag/encrypted-rag-chatbot.ipynb)**

### 2. Private Fraud Detection ([`private-fraud-detection/`](./private-fraud-detection/))

Fraud detection using encrypted vector similarity search on credit card transaction embeddings.

- Uses CyborgDB with in-memory storage
- Demonstrates similarity search on encrypted fraud patterns
- Privacy-preserving analytics

### 3. Vector Inversion Attack Demos ([`vector-inversion/`](./vector-inversion/))

Side-by-side comparisons showing how vec2text attacks can recover original text from unencrypted vectors in popular databases:

- **ChromaDB vs CyborgDB** - See how ChromaDB's plaintext vectors are vulnerable while CyborgDB's encrypted vectors remain secure
- **Qdrant vs CyborgDB** - Same comparison with Qdrant's local file-based storage

Both notebooks demonstrate:
- Direct on-disk extraction from each backend (ChromaDB SQLite, Qdrant SQLite+pickle, CyborgDB on-disk RocksDB)
- Vec2text inversion attacks on plaintext embeddings
- Protection provided by CyborgDB's encryption

## Getting Started

Each example is a self-contained Jupyter notebook with detailed setup instructions. Simply open the notebook and follow along!

Most examples are designed to run on Google Colab with zero setup - just click the Colab badge and run.

## Learn More

- **Website**: [cyborg.co](https://cyborg.co)
- **Documentation**: [docs.cyborg.co](https://docs.cyborg.co)
- **GitHub**: [github.com/cyborginc](https://github.com/cyborginc)

## License

MIT License - see LICENSE file for details.
