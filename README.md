Getting Started
Installation and setup for DOVASAMA SDK.

$ npm install @dovasama/sdk

Initialize the client:

const dovasama = new DovaSama({
  apiKey: 'your-api-key',
  network: 'mainnet'
})

Fetch real-time data:

const data = await dovasama.blockchain.getLatestBlock()

Core Endpoints
→
/blockchain/blocks - Get block information and transactions
→
/tokens - Token metadata and real-time balances
→
/dex - DEX liquidity pools and trading data
→
/nft - NFT collections and metadata
→
/wallets - Wallet history and transaction analysis
→
/streaming - Real-time data subscriptions via WebSocket
Authentication
All requests require an API key. Include your key in the Authorization header:

Authorization: Bearer YOUR_API_KEY

Develop locally without rate limits. Production keys unlock full capacity and dedicated support.

Rate Limiting & Pricing
→
Free tier: 100 requests/hour - Perfect for development
→
Pro tier: 10,000 requests/hour + streaming - For production apps
→
Enterprise: Custom limits + dedicated support
→
All plans include X402 micropayment options
Error Handling
Clear error responses with codes and recovery strategies:

{ 'status': 'error', 'code': 'RATE_LIMIT_EXCEEDED', 'message': 'Request limit reached' }

See full error reference for details and recovery strategies.
