export default function handler(req, res) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AnswerLayer Public API Documentation</title>
    <link rel="icon" type="image/png" href="https://getanswerlayer.com/favicon.ico">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --navy-50: #f8fafc;
            --navy-100: #f1f5f9;
            --navy-200: #e2e8f0;
            --navy-300: #cbd5e1;
            --navy-400: #94a3b8;
            --navy-500: #64748b;
            --navy-600: #475569;
            --navy-700: #334155;
            --navy-800: #1e293b;
            --navy-900: #0f172a;
            --navy-950: #020617;
        }
        
        * {
            box-sizing: border-box;
        }
        
        body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: var(--navy-50);
            color: var(--navy-900);
            line-height: 1.6;
        }
        
        .header {
            background: linear-gradient(135deg, var(--navy-800) 0%, var(--navy-700) 50%, var(--navy-600) 100%);
            color: white;
            padding: 3rem 0;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(ellipse at top left, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                        radial-gradient(ellipse at bottom right, rgba(168, 85, 247, 0.15) 0%, transparent 50%);
            pointer-events: none;
        }
        
        .header-content {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            z-index: 1;
        }
        
        .logo-section {
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }
        
        .logo {
            height: 48px;
            width: auto;
        }
        
        .header h1 {
            margin: 0;
            font-family: 'Cormorant Garamond', serif;
            font-size: 2.5rem;
            font-weight: 600;
            color: white;
            letter-spacing: -0.025em;
        }
        
        .header p {
            margin: 0.5rem 0 0 0;
            font-size: 1.125rem;
            opacity: 0.9;
            color: var(--navy-200);
            font-weight: 400;
        }
        
        .nav-links {
            display: flex;
            gap: 2rem;
            align-items: center;
        }
        
        .nav-link {
            color: var(--navy-200);
            text-decoration: none;
            font-weight: 500;
            font-size: 1rem;
            transition: all 0.2s ease;
            padding: 0.5rem 0;
            border-bottom: 2px solid transparent;
        }
        
        .nav-link:hover {
            color: white;
            border-bottom-color: rgba(59, 130, 246, 0.6);
        }
        
        .cta-button {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .cta-button:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
            box-shadow: 0 8px 15px -3px rgba(0, 0, 0, 0.1);
        }
        
        .content {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0;
            background: white;
            box-shadow: 0 0 0 1px var(--navy-200);
        }
        
        /* Redoc customization */
        .redoc-container {
            margin: 0;
            padding: 0;
        }
        
        .redoc-wrap {
            background: white;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 12px;
        }
        
        ::-webkit-scrollbar-track {
            background: var(--navy-100);
        }
        
        ::-webkit-scrollbar-thumb {
            background: var(--navy-300);
            border-radius: 6px;
            border: 2px solid var(--navy-100);
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: var(--navy-400);
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
            .header {
                padding: 2rem 0;
            }
            
            .header-content {
                flex-direction: column;
                gap: 1.5rem;
                text-align: center;
            }
            
            .nav-links {
                flex-direction: column;
                gap: 1rem;
            }
            
            .header h1 {
                font-size: 2rem;
            }
            
            .header p {
                font-size: 1rem;
            }
            
            .logo-section {
                flex-direction: column;
                gap: 1rem;
            }
        }
        
        @media (max-width: 480px) {
            .header-content {
                padding: 0 1rem;
            }
            
            .header h1 {
                font-size: 1.75rem;
            }
            
            .cta-button {
                padding: 0.625rem 1.25rem;
                font-size: 0.9rem;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="header-content">
            <div class="logo-section">
                <div>
                    <h1>AnswerLayer Public API</h1>
                    <p>Conversational Analytics Platform</p>
                </div>
            </div>
            <nav class="nav-links">
                <a href="https://getanswerlayer.com" class="nav-link">Home</a>
                <a href="https://getanswerlayer.com/pricing" class="nav-link">Pricing</a>
                <a href="https://getanswerlayer.com/sign-up" class="cta-button">Get Started</a>
            </nav>
        </div>
    </div>

    <div class="content">
        <div id="redoc-container" class="redoc-container"></div>
    </div>

    <script src="https://unpkg.com/redoc@2.1.3/bundles/redoc.standalone.js"></script>
    <script src="https://unpkg.com/posthog-js@1.255.1/dist/posthog.min.js"></script>
    <!-- Simple Analytics -->
    <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
    <script>
        // Analytics initialization and utilities
        (function() {
            // Check if we're on localhost
            const isLocalhost = () => {
                const hostname = window.location.hostname;
                return hostname === 'localhost' || hostname === '127.0.0.1';
            };

            // PostHog initialization
            const initializePostHog = () => {
                // Environment variables injected from Vercel serverless function
                const posthogKey = '${process.env.VITE_POSTHOG_KEY || ''}';
                const posthogHost = 'https://us.i.posthog.com';
                
                if (!posthogKey) {
                    console.log('[PostHog] API key not configured, skipping initialization');
                    return;
                }

                // Skip PostHog initialization on localhost unless explicitly enabled
                if (isLocalhost()) {
                    console.log('[PostHog] Disabled on localhost environment');
                    return;
                }

                try {
                    posthog.init(posthogKey, {
                        api_host: posthogHost,
                        person_profiles: 'identified_only', // GDPR compliant
                        
                        // Page tracking
                        capture_pageview: true,
                        capture_pageleave: true,
                        capture_dead_clicks: true,
                        capture_performance: true,
                        
                        // Session recordings for UX insights
                        session_recording: {
                            recordCrossOriginIframes: false,
                            maskAllInputs: true,
                            maskInputOptions: {
                                password: true,
                                email: false,
                                tel: true,
                            },
                        },
                        
                        // Autocapture events
                        autocapture: {
                            css_selector_allowlist: [
                                'button',
                                'a',
                                'input[type="submit"]',
                                'input[type="button"]',
                                '[role="button"]',
                                '.btn',
                                '[data-track]',
                                // Redoc specific selectors
                                '.redoc-wrap *',
                                '[class*="operation"]',
                                '[class*="schema"]',
                                '[class*="endpoint"]'
                            ],
                            url_allowlist: [
                                'developers.getanswerlayer.com',
                                'getanswerlayer.com',
                                'localhost',
                            ],
                        },
                        
                        // Privacy and performance
                        respect_dnt: true,
                        opt_out_capturing_by_default: false,
                        
                        loaded: (posthog) => {
                            console.log('[PostHog] Successfully initialized for API docs');
                            
                            // Enable debug mode on localhost
                            if (isLocalhost()) {
                                posthog.debug();
                                console.log('[PostHog] Debug mode enabled for localhost');
                            }
                        }
                    });

                    // Track initial page view with context
                    posthog.capture('api_docs_page_view', {
                        page_title: document.title,
                        page_url: window.location.href,
                        referrer: document.referrer,
                        user_agent: navigator.userAgent,
                        timestamp: new Date().toISOString()
                    });

                } catch (error) {
                    console.error('[PostHog] Failed to initialize:', error);
                }
            };

            // Analytics utility functions
            window.analytics = {
                track: (eventName, properties = {}) => {
                    console.log('[Analytics] Tracking event:', eventName, properties);
                    
                    // PostHog tracking
                    if (typeof posthog !== 'undefined' && posthog.capture) {
                        posthog.capture(eventName, {
                            ...properties,
                            source: 'api_docs',
                            timestamp: new Date().toISOString()
                        });
                    }
                    
                    // SimpleAnalytics tracking
                    if (typeof window.sa_event === 'function') {
                        try {
                            window.sa_event(eventName, properties);
                        } catch (error) {
                            console.error('[SimpleAnalytics] Error sending event:', error);
                        }
                    }
                },

                // Track API endpoint interactions
                trackEndpoint: (endpoint, method, action = 'viewed') => {
                    window.analytics.track('api_endpoint_interaction', {
                        endpoint: endpoint,
                        method: method,
                        action: action,
                        section: window.analytics.getCurrentSection()
                    });
                },

                // Track schema interactions
                trackSchema: (schemaName, action = 'viewed') => {
                    window.analytics.track('api_schema_interaction', {
                        schema: schemaName,
                        action: action,
                        section: window.analytics.getCurrentSection()
                    });
                },

                // Get current documentation section
                getCurrentSection: () => {
                    const hash = window.location.hash;
                    if (hash.includes('operation/')) {
                        return 'endpoint';
                    } else if (hash.includes('schema/')) {
                        return 'schema';
                    } else if (hash.includes('tag/')) {
                        return 'tag';
                    }
                    return 'overview';
                },

                // Track search usage
                trackSearch: (query, resultsCount = null) => {
                    window.analytics.track('api_docs_search', {
                        query: query,
                        results_count: resultsCount,
                        section: window.analytics.getCurrentSection()
                    });
                },

                // Track external links
                trackExternalLink: (url, linkText = '') => {
                    window.analytics.track('api_docs_external_link', {
                        destination_url: url,
                        link_text: linkText,
                        source_section: window.analytics.getCurrentSection()
                    });
                }
            };

            // Initialize analytics
            initializePostHog();

            // Track hash changes (navigation within docs)
            let lastHash = window.location.hash;
            const trackHashChange = () => {
                const currentHash = window.location.hash;
                if (currentHash !== lastHash) {
                    window.analytics.track('api_docs_navigation', {
                        from_hash: lastHash,
                        to_hash: currentHash,
                        from_section: window.analytics.getCurrentSection(),
                        navigation_type: 'hash_change'
                    });
                    lastHash = currentHash;
                }
            };

            // Listen for hash changes
            window.addEventListener('hashchange', trackHashChange);

            // Track clicks on external links
            document.addEventListener('click', (event) => {
                const link = event.target.closest('a');
                if (link && link.href) {
                    const url = new URL(link.href);
                    const currentDomain = window.location.hostname;
                    
                    // Track external links
                    if (url.hostname !== currentDomain && url.hostname !== '') {
                        window.analytics.trackExternalLink(link.href, link.textContent || '');
                    }
                }
            });

            // Track time spent on page
            let pageStartTime = Date.now();
            window.addEventListener('beforeunload', () => {
                const timeSpent = Math.round((Date.now() - pageStartTime) / 1000);
                window.analytics.track('api_docs_session_end', {
                    time_spent_seconds: timeSpent,
                    final_section: window.analytics.getCurrentSection()
                });
            });

            // Track successful API spec load
            window.addEventListener('load', () => {
                window.analytics.track('api_docs_loaded', {
                    load_time: Date.now() - pageStartTime,
                    page_url: window.location.href
                });
            });

        })();

        // Initialize Redoc with AnswerLayer brand styling
        Redoc.init(
            '../answerlayer-public-api-spec.yaml',
            {
                theme: {
                    colors: {
                        primary: {
                            main: '#1e293b',
                            light: '#334155',
                            dark: '#0f172a'
                        },
                        secondary: {
                            main: '#3b82f6',
                            light: '#60a5fa',
                            dark: '#1d4ed8'
                        },
                        success: {
                            main: '#10b981',
                            light: '#34d399',
                            dark: '#047857'
                        },
                        warning: {
                            main: '#f59e0b',
                            light: '#fbbf24',
                            dark: '#d97706'
                        },
                        error: {
                            main: '#ef4444',
                            light: '#f87171',
                            dark: '#dc2626'
                        },
                        gray: {
                            50: '#f8fafc',
                            100: '#f1f5f9',
                            200: '#e2e8f0',
                            300: '#cbd5e1',
                            400: '#94a3b8',
                            500: '#64748b',
                            600: '#475569',
                            700: '#334155',
                            800: '#1e293b',
                            900: '#0f172a'
                        },
                        border: {
                            dark: '#e2e8f0',
                            light: '#f1f5f9'
                        },
                        text: {
                            primary: '#0f172a',
                            secondary: '#475569'
                        }
                    },
                    typography: {
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        fontSize: '15px',
                        lineHeight: '1.6',
                        fontWeightRegular: '500',
                        fontWeightBold: '600',
                        code: {
                            fontFamily: 'Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
                            fontSize: '13px',
                            backgroundColor: '#f1f5f9',
                            color: '#1e293b'
                        },
                        headings: {
                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                            fontWeight: '600',
                            lineHeight: '1.4'
                        },
                        links: {
                            color: '#3b82f6',
                            visited: '#1d4ed8',
                            hover: '#1e40af'
                        }
                    },
                    sidebar: {
                        width: '320px',
                        backgroundColor: '#f8fafc',
                        borderColor: '#e2e8f0',
                        textColor: '#1e293b'
                    },
                    rightPanel: {
                        backgroundColor: '#1e293b',
                        width: '45%',
                        textColor: '#e2e8f0'
                    },
                    codeBlock: {
                        backgroundColor: '#0f172a'
                    },
                    fab: {
                        backgroundColor: '#3b82f6',
                        color: '#ffffff'
                    }
                },
                scrollYOffset: 0,
                hideDownloadButton: false,
                disableSearch: false,
                expandResponses: '200,201',
                showExtensions: true,
                hideHostname: false,
                hideInfoDescription: false,
                hideInfoVersion: false,
                hideSchemaPattern: false,
                expandDefaultServerVariables: true,
                maxDisplayedEnumValues: 10,
                jsonSampleExpandLevel: 2,
                hideRequestPayloadSample: false,
                showObjectSchemaExamples: true,
                showExtensions: ['x-badges', 'x-code-samples'],
                sortPropsAlphabetically: false,
                payloadSampleIdx: 0,
                expandSingleSchemaField: false,
                schemaExpansionLevel: 0,
                showSecuritySchemeType: true,
                hideSecuritySection: false,
                unstable_ignoreMimeTypeErrors: false,
                requiredPropsFirst: true,
                noAutoAuth: false,
                pathInMiddlePanel: false,
                hideLoading: false,
                showConsole: true,
                nativeScrollbars: false,
                usePathOperationAsName: false
            },
            document.getElementById('redoc-container')
        ).then(() => {
            // Track successful Redoc initialization
            if (window.analytics) {
                window.analytics.track('api_docs_redoc_initialized', {
                    spec_url: '../answerlayer-public-api-spec.yaml',
                    initialization_time: Date.now() - pageStartTime
                });
            }

            // Add additional analytics hooks after Redoc loads
            setTimeout(() => {
                // Track API section interactions
                const observer = new MutationObserver((mutations) => {
                    mutations.forEach((mutation) => {
                        if (mutation.type === 'childList') {
                            // Check for operation clicks
                            mutation.addedNodes.forEach((node) => {
                                if (node.nodeType === 1 && node.classList) {
                                    if (node.classList.contains('operation') || 
                                        node.querySelector && node.querySelector('.operation')) {
                                        // Operation expanded/viewed
                                        const operationElement = node.classList.contains('operation') ? node : node.querySelector('.operation');
                                        if (operationElement) {
                                            const method = operationElement.querySelector('[class*="method"]')?.textContent;
                                            const endpoint = operationElement.querySelector('[class*="path"]')?.textContent;
                                            if (method && endpoint && window.analytics) {
                                                window.analytics.trackEndpoint(endpoint, method, 'expanded');
                                            }
                                        }
                                    }
                                }
                            });
                        }
                    });
                });

                // Start observing
                const redocContainer = document.getElementById('redoc-container');
                if (redocContainer) {
                    observer.observe(redocContainer, {
                        childList: true,
                        subtree: true
                    });
                }
            }, 1000);
        }).catch((error) => {
            console.error('[Redoc] Failed to initialize:', error);
            if (window.analytics) {
                window.analytics.track('api_docs_redoc_error', {
                    error_message: error.message,
                    spec_url: '../answerlayer-public-api-spec.yaml'
                });
            }
        });
    </script>
</body>
</html>`;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
    res.status(200).send(html);
} 