# Public API Documentation Analytics

This document describes the analytics implementation for the AnswerLayer Public API documentation site.

## Overview

The API documentation uses a dual analytics approach similar to the main web application:
- **PostHog**: Primary analytics platform with advanced features
- **SimpleAnalytics**: Privacy-first backup analytics

## Analytics Platforms

### PostHog Features Enabled
- **Page Views**: Automatic tracking of page visits
- **Session Recordings**: See how users interact with the documentation
- **Autocapture**: Automatic click and interaction tracking
- **Performance Monitoring**: Page load times and web vitals
- **Custom Events**: Specific API documentation interactions

### SimpleAnalytics
- **Privacy-First**: No cookies, GDPR compliant
- **Custom Events**: Backup tracking for key interactions
- **Page Views**: Basic traffic analytics

## Tracked Events

### Core Navigation Events

#### `api_docs_page_view`
**Description**: Initial page load
**Properties**:
- `page_title`: Document title
- `page_url`: Full URL
- `referrer`: Referring page
- `user_agent`: Browser information
- `timestamp`: Event timestamp

#### `api_docs_navigation`
**Description**: Navigation within documentation (hash changes)
**Properties**:
- `from_hash`: Previous URL hash
- `to_hash`: New URL hash
- `from_section`: Previous section type
- `navigation_type`: Always "hash_change"

#### `api_docs_loaded`
**Description**: Documentation fully loaded
**Properties**:
- `load_time`: Time to load in milliseconds
- `page_url`: Current URL

### Documentation Interaction Events

#### `api_endpoint_interaction`
**Description**: User interacts with API endpoints
**Properties**:
- `endpoint`: API endpoint path (e.g., "/connections")
- `method`: HTTP method (GET, POST, etc.)
- `action`: Type of interaction ("viewed", "expanded")
- `section`: Current documentation section

#### `api_schema_interaction`
**Description**: User views schema definitions
**Properties**:
- `schema`: Schema name
- `action`: Type of interaction ("viewed")
- `section`: Current documentation section

#### `api_docs_search`
**Description**: Search functionality usage
**Properties**:
- `query`: Search query text
- `results_count`: Number of results (if available)
- `section`: Current documentation section

#### `api_docs_external_link`
**Description**: Clicks on external links
**Properties**:
- `destination_url`: Target URL
- `link_text`: Link text content
- `source_section`: Section where link was clicked

### Technical Events

#### `api_docs_redoc_initialized`
**Description**: Redoc successfully loads the API specification
**Properties**:
- `spec_url`: Path to API specification file
- `initialization_time`: Time to initialize Redoc

#### `api_docs_redoc_error`
**Description**: Error loading Redoc or API specification
**Properties**:
- `error_message`: Error description
- `spec_url`: Path to API specification file

#### `api_docs_session_end`
**Description**: User leaves the documentation
**Properties**:
- `time_spent_seconds`: Total time on page
- `final_section`: Last section viewed

## Implementation Details

### Environment Handling
- **Production**: Full analytics enabled
- **Localhost**: PostHog disabled by default, SimpleAnalytics disabled
- **Debug Mode**: Automatic console logging on localhost

### Privacy & Compliance
- **GDPR Compliant**: `person_profiles: 'identified_only'` setting
- **Input Masking**: Sensitive fields automatically masked in recordings
- **Do Not Track**: Respects browser DNT headers
- **Domain Restrictions**: Only tracks on authorized domains

### Analytics Utility Functions

The global `window.analytics` object provides these functions:

```javascript
// Basic event tracking
window.analytics.track(eventName, properties)

// Endpoint-specific tracking
window.analytics.trackEndpoint(endpoint, method, action)

// Schema-specific tracking
window.analytics.trackSchema(schemaName, action)

// Search tracking
window.analytics.trackSearch(query, resultsCount)

// External link tracking
window.analytics.trackExternalLink(url, linkText)

// Get current section
window.analytics.getCurrentSection()
```

### Section Detection

The system automatically detects which section of the documentation the user is viewing:
- `overview`: Main documentation page
- `endpoint`: Viewing specific API endpoints
- `schema`: Viewing data schemas
- `tag`: Viewing grouped endpoints by tag

## Configuration

### PostHog Configuration
The PostHog API key is injected from Vercel environment variables:

```javascript
const posthogKey = '${process.env.VITE_POSTHOG_KEY || ''}';
const posthogHost = 'https://us.i.posthog.com';
```

### Environment Variables Setup

#### Vercel Environment Variables
1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add the following environment variable:
   - **Name**: `VITE_POSTHOG_KEY`
   - **Value**: Your PostHog project API key (starts with `phc_`)
   - **Environment**: Production, Preview, Development (as needed)

#### Getting Your PostHog API Key
1. Log into your PostHog dashboard
2. Go to Project Settings → API Keys
3. Copy your Project API Key (not the Personal API Key)
4. The key should start with `phc_`

### Local Development
For local development, create a `.env.local` file in the `public-api-docs` directory:
```
VITE_POSTHOG_KEY=phc_your_actual_posthog_key_here
```

### Autocapture Selectors
Redoc-specific elements are automatically tracked:
- `.redoc-wrap *`: All Redoc elements
- `[class*="operation"]`: API operations
- `[class*="schema"]`: Schema definitions
- `[class*="endpoint"]`: Endpoint elements

## Usage Analytics Insights

This implementation enables tracking of:
1. **Popular API Endpoints**: Which endpoints get the most attention
2. **User Journey**: How users navigate through the documentation
3. **Search Patterns**: What users are looking for
4. **Performance Issues**: Slow loading sections or errors
5. **External Traffic**: Which external links are most valuable
6. **Session Engagement**: How long users spend with the docs

## Testing

### Console Testing
In browser console (development):
```javascript
// Test basic tracking
window.analytics.track('test_event', { test: true });

// Test endpoint tracking
window.analytics.trackEndpoint('/connections', 'GET', 'viewed');

// Test search tracking
window.analytics.trackSearch('semantic layer');
```

### Verification
1. Check browser network tab for PostHog requests
2. Verify SimpleAnalytics events in console
3. Use PostHog debug mode for detailed logging 