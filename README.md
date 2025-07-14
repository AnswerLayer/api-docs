# AnswerLayer Public API Documentation

This repository contains the public API documentation for AnswerLayer's Conversational Analytics Platform, built with [Redoc](https://github.com/Redocly/redoc) and deployed on Vercel.

## 🚀 Live Documentation

The live documentation is available at: [https://docs.getanswerlayer.com](https://docs.getanswerlayer.com)

## 📋 Overview

The AnswerLayer Public API enables organizations to build conversational interfaces for their data analytics needs. This API allows you to programmatically:

- **Client Management**: Create and manage client organizations
- **User Management**: Handle client users and authentication
- **Role Management**: Assign permissions and access controls
- **Natural Language Queries**: Process questions and generate insights
- **Chart Generation**: Create visualizations from data
- **Conversation Management**: Handle question chains and follow-ups

## 🏗️ Architecture

The API follows a hierarchical structure:

```
Organization (Your Company)
├── Client Organizations (Your Customers)
│   ├── Client Users (End Users)
│   │   ├── Roles & Permissions
│   │   ├── Questions & Answers
│   │   └── Conversation Chains
│   └── Database Connections
└── API Keys & Authentication
```

## 🔐 Authentication

All API endpoints require API key authentication:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.getanswerlayer.com/v1/clients
```

## 📚 Core Endpoints

### Admin Operations (Organization Backend)

- **Client Management**: `/admin/clients`
- **User Management**: `/admin/clients/{client_id}/users`
- **Role Management**: `/admin/clients/{client_id}/users/{user_id}/roles`

### End User Operations (Client Applications)

- **Ask Questions**: `POST /questions`
- **Generate Charts**: `POST /questions/{question_id}/chart`
- **Follow-up Suggestions**: `GET /questions/{question_id}/suggestions`
- **Conversation Chains**: `GET /chains`

## 🛠️ Development

### Prerequisites

- Node.js (v18+)
- Vercel CLI (for deployment)

### Local Development

1. Clone the repository:
```bash
git clone <repository-url>
cd public-api-docs
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### File Structure

```
public-api-docs/
├── api/
│   └── docs.js                 # Redoc server handler
├── answerlayer-public-api-spec.yaml  # OpenAPI specification
├── package.json                # Dependencies and scripts
├── vercel.json                 # Vercel deployment config
└── README.md                   # This file
```

## 🔧 Customization

### Updating the API Specification

The API documentation is generated from the OpenAPI 3.0.3 specification in `answerlayer-public-api-spec.yaml`. To update the documentation:

1. Edit the YAML file with your changes
2. Deploy to see the updates live

### Styling and Branding

The documentation uses custom styling in `api/docs.js` that matches the AnswerLayer brand:

- **Colors**: Blue gradient header with AnswerLayer brand colors
- **Typography**: Inter font family for readability
- **Theme**: Clean, modern design with proper contrast
- **Responsive**: Mobile-friendly layout

### Redoc Configuration

The Redoc instance is configured with:

- **Theme**: Custom AnswerLayer colors and typography
- **Features**: Search enabled, expandable responses, code samples
- **Layout**: 60/40 split between documentation and examples
- **Navigation**: Sticky sidebar with smooth scrolling

## 🚀 Deployment

### Vercel Deployment

The documentation is automatically deployed to Vercel:

1. **Production**: Deploys from `main` branch
2. **Preview**: Deploys from feature branches
3. **Domain**: Custom domain configured for production

### Manual Deployment

```bash
# Deploy to production
npm run deploy

# Deploy to preview
vercel
```

### Environment Variables

No environment variables are required for the documentation site.

## 📝 API Examples

### Create a Client

```bash
curl -X POST https://api.getanswerlayer.com/v1/admin/clients \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Acme Corporation",
    "domain": "acme.com",
    "description": "Large enterprise client"
  }'
```

### Ask a Question

```bash
curl -X POST https://api.getanswerlayer.com/v1/questions \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "question": "What were our top 5 products by revenue last quarter?",
    "client_id": "client_123",
    "user_id": "user_456"
  }'
```

### Generate a Chart

```bash
curl -X POST https://api.getanswerlayer.com/v1/questions/answer_123/chart \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "chart_type": "bar",
    "title": "Top Products by Revenue"
  }'
```

## 🔗 Related Links

- [AnswerLayer Website](https://getanswerlayer.com)
- [Get Started](https://getanswerlayer.com/app)
- [Pricing](https://getanswerlayer.com/pricing)
- [Support](mailto:support@getanswerlayer.com)

## 📄 License

This documentation is licensed under the MIT License.

## 🤝 Contributing

For questions or suggestions regarding the API documentation:

1. Open an issue in this repository
2. Contact our support team: support@getanswerlayer.com
3. Join our developer community (coming soon)

---

**Built with ❤️ by the AnswerLayer team** 