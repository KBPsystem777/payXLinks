// Central content management file
// All static text content is stored here for easy management

const getCurrentYear = () => {
  const date = new Date();
  return date.getFullYear();
};

export const siteConfig = {
  name: "BPxPay",
  description: "Fast, Secure, and Cost-Effective Digital Payments",
  logo: "https://pay.bpxai.com/assets/bpxpay-logo-C9_15mfN.png",
  footer: `© ${getCurrentYear()} BPxPay. All rights reserved.`,
  contact: {
    email: "bpxpay@gmail.com",
    twitter: "@bpxpay",
    website: "https://pay.bpxai.com",
  },
  baseUrl: "https://pay.bpxai.com",
  shortLinkDomain: "bpx.pay/",
  showLogo: false,
};

export const homepageContent = {
  hero: {
    title: "Get Paid Instantly Onchain",
    description:
      "Create and share payment links in seconds. Accept onchain payments from anyone, anywhere in the world.",
    primaryButton: "Create Payment Link",
    secondaryButton: "View Dashboard",
  },
  howItWorks: {
    title: "How It Works",
    steps: [
      {
        title: "Create",
        description:
          "Generate a unique payment link in seconds. Set the amount, currency, and add a description.",
        icon: "Pen",
      },
      {
        title: "Share",
        description:
          "Share your payment link via email, social media, or messaging apps.",
        icon: "Share2",
      },
      {
        title: "Get Paid",
        description:
          "Receive payments directly to your wallet. Track all transactions in your dashboard.",
        icon: "Wallet",
      },
    ],
  },
  features: [
    {
      title: "Multiple Networks",
      description:
        "Accept payments on Ethereum, Base, Solana, and more. Choose the network that works best for you.",
      icon: "Network",
    },
    {
      title: "Custom Username",
      description:
        "Get your own personalized payment page at bpxpay.com/yourusername.",
      icon: "User",
    },
    {
      title: "Instant Payments",
      description:
        "No waiting for bank transfers. Get paid instantly with cryptocurrency.",
      icon: "Zap",
    },
    {
      title: "Transaction Tracking",
      description:
        "Monitor all your payment links and transactions in one dashboard.",
      icon: "BarChart2",
    },
    {
      title: "Short Links",
      description: "Share compact, easy-to-remember payment links with anyone.",
      icon: "Link",
    },
    {
      title: "No Hidden Fees",
      description:
        "Only pay standard network transaction fees. No monthly charges or setup costs.",
      icon: "DollarSign",
    },
  ],
  testimonials: [
    {
      quote:
        "BPxPay has transformed how I receive payments from my international clients. Fast, secure, and so easy to use!",
      author: "Maria S.",
      role: "Freelance Designer",
    },
    {
      quote:
        "Setting up payment links for my online store took minutes. My customers love the simplicity.",
      author: "James T.",
      role: "E-commerce Owner",
    },
    {
      quote:
        "The ability to create custom payment pages for different projects has been a game-changer for my business.",
      author: "Alex K.",
      role: "Digital Agency Founder",
    },
  ],
  cta: {
    title: "Ready to Get Started?",
    description:
      "Join thousands of businesses and individuals who use BPxPay for fast, secure cryptocurrency payments.",
    button: "Create Your First Payment Link",
  },
  faq: {
    title: "Frequently Asked Questions",
    questions: [
      {
        question: "How do I create a payment link?",
        answer:
          "Simply sign up, connect your wallet, and click 'Create Payment Link'. Enter the amount, select your currency and network, add a description, and your link is ready to share!",
      },
      {
        question: "What cryptocurrencies can I accept?",
        answer:
          "BPxPay currently supports USDC, USDT, ETH, BTC, and SOL across multiple networks including Ethereum, Base, and Solana.",
      },
      {
        question: "Are there any fees?",
        answer:
          "BPxPay doesn't charge any platform fees. You only pay the standard network transaction fees when receiving payments.",
      },
      {
        question: "How do I withdraw my funds?",
        answer:
          "Funds are sent directly to your connected wallet. There's no need to withdraw as you maintain full custody of your assets at all times.",
      },
      {
        question: "Is BPxPay secure?",
        answer:
          "Yes! BPxPay uses blockchain technology for secure transactions. We never hold your funds, and all payments go directly to your wallet.",
      },
    ],
  },
};

export const createPageContent = {
  title: "Create Payment Link",
  description: "Enter the details for your cryptocurrency payment request",
  fields: {
    amount: "Amount",
    currency: "Select currency",
    network: "Select network",
    description: "Description",
    descriptionPlaceholder: "Payment for services...",
    tags: "Tags (comma separated)",
    tagsPlaceholder: "invoice, client, project",
    visibility: "Visibility",
    visibilityOptions: {
      public: "Public - Anyone can see this link",
      private: "Private - Only accessible with direct link",
    },
  },
  buttons: {
    generate: "Generate Payment Link",
    copy: "Copy Link",
    copyShort: "Copy Short Link",
    test: "Test Link",
  },
  notifications: {
    missing: {
      title: "Missing information",
      description: "Please fill in all required fields",
    },
    generated: {
      title: "Payment link generated!",
      description: "Your payment link has been created successfully.",
    },
    copied: {
      title: "Copied to clipboard",
      description: "Payment link has been copied to your clipboard.",
    },
  },
};

export const paymentPageContent = {
  title: "Payment Request",
  details: {
    amount: "Amount",
    description: "Description",
    network: "Network",
    tags: "Tags",
  },
  networks: {
    ethereum: "Ethereum Mainnet",
    base: "Base",
    optimism: "Optimism",
    arbitrum: "Arbitrum",
    polygon: "Polygon",
    solana: "Solana",
  },
  buttons: {
    connect: "Connect Wallet",
    pay: "Pay",
  },
  notifications: {
    connecting: {
      title: "Connecting wallet...",
      description: "Please approve the connection request in your wallet.",
    },
    connected: {
      title: "Wallet connected!",
      description: "Your wallet has been successfully connected.",
    },
    processing: {
      title: "Processing payment...",
      description: "Please confirm the transaction in your wallet.",
    },
    success: {
      title: "Payment successful!",
      description: "You've successfully sent {amount} {currency}.",
    },
  },
  legal: "By proceeding, you agree to the terms of service and privacy policy.",
  demo: {
    title: "Demo Payment Request",
    description: "This is a demo of how payment links work",
    notice:
      "Demo Mode: No actual transactions will be made. This is a demonstration of the payment flow.",
  },
};

export const dashboardContent = {
  title: "Dashboard",
  subtitle: "Your Payment Links",
  createButton: "Create New Link",
  stats: {
    title: "Overview",
    totalLinks: "Total Links",
    totalTransactions: "Total Transactions",
    totalVolume: "Total Volume",
  },
  table: {
    headers: {
      id: "ID",
      amount: "Amount",
      description: "Description",
      created: "Created",
      transactions: "Transactions",
      status: "Status",
      visibility: "Visibility",
      network: "Network",
      actions: "Actions",
    },
  },
  emptyState: "You haven't created any payment links yet.",
  profileSection: {
    title: "Your Profile",
    username: "Username",
    usernameDescription: "Your public profile URL will be:",
    updateButton: "Update Profile",
    copyButton: "Copy Profile Link",
  },
};

export const profilePageContent = {
  title: "Public Profile",
  subtitle: "Payment Links",
  emptyState: "No public payment links available.",
};

export const settingsContent = {
  title: "Account Settings",
  profileSection: {
    title: "Profile Settings",
    username: "Username",
    usernameDescription: "Choose a unique username for your public profile",
    email: "Email Address",
    saveButton: "Save Changes",
  },
  notificationsSection: {
    title: "Notification Settings",
    emailNotifications: "Email Notifications",
    paymentReceived: "Payment Received",
    paymentFailed: "Payment Failed",
    saveButton: "Save Preferences",
  },
};

export const currencies = [
  { value: "USDC", label: "USDC", symbol: "$" },
  { value: "ETH", label: "ETH", symbol: "Ξ" },
  { value: "ccBTC", label: "ccBTC", symbol: "₿" },
  // { value: "SOL", label: "SOL", symbol: "◎" },
  // { value: "USDT", label: "USDT", symbol: "₮" },
];

export const networks = [
  { value: "base", label: "Base", currencies: ["ETH", "USDC"] },
  // {
  //   value: "ethereum",
  //   label: "Ethereum Mainnet",
  //   currencies: ["ETH", "USDC", "USDT"],
  // },
  // { value: "optimism", label: "Optimism", currencies: ["ETH", "USDC", "USDT"] },
  // { value: "arbitrum", label: "Arbitrum", currencies: ["ETH", "USDC", "USDT"] },
  // { value: "polygon", label: "Polygon", currencies: ["USDC", "USDT"] },
  // { value: "solana", label: "Solana", currencies: ["SOL", "USDC"] },
];

// Sample data for demonstration
export const samplePaymentLinks = [
  {
    id: "pay_abc123",
    shortId: "bpx1a2b3c",
    amount: "100",
    currency: "USDC",
    network: "ethereum",
    description: "Website development",
    tags: ["invoice", "client"],
    created: "2025-04-28",
    url: "/pay/abc123?amount=100&currency=USDC&network=ethereum&description=Website%20development",
    transactions: 3,
    status: "active",
    visibility: "public",
  },
  {
    id: "pay_def456",
    shortId: "bpx4d5e6f",
    amount: "0.5",
    currency: "ETH",
    network: "base",
    description: "Logo design",
    tags: ["design", "freelance"],
    created: "2025-04-27",
    url: "/pay/def456?amount=0.5&currency=ETH&network=base&description=Logo%20design",
    transactions: 1,
    status: "active",
    visibility: "private",
  },
  {
    id: "pay_ghi789",
    shortId: "bpx7g8h9i",
    amount: "50",
    currency: "USDT",
    network: "polygon",
    description: "Monthly subscription",
    tags: ["subscription"],
    created: "2025-04-26",
    url: "/pay/ghi789?amount=50&currency=USDT&network=polygon&description=Monthly%20subscription",
    transactions: 12,
    status: "inactive",
    visibility: "public",
  },
];

export const sampleTransactions = [
  {
    id: "tx_123456",
    paymentLinkId: "pay_abc123",
    amount: "100",
    currency: "USDC",
    network: "ethereum",
    status: "completed",
    date: "2025-04-28",
    from: "0x1234...5678",
  },
  {
    id: "tx_234567",
    paymentLinkId: "pay_abc123",
    amount: "100",
    currency: "USDC",
    network: "ethereum",
    status: "completed",
    date: "2025-04-27",
    from: "0x2345...6789",
  },
  {
    id: "tx_345678",
    paymentLinkId: "pay_abc123",
    amount: "100",
    currency: "USDC",
    network: "ethereum",
    status: "completed",
    date: "2025-04-26",
    from: "0x3456...7890",
  },
  {
    id: "tx_456789",
    paymentLinkId: "pay_def456",
    amount: "0.5",
    currency: "ETH",
    network: "base",
    status: "completed",
    date: "2025-04-27",
    from: "0x4567...8901",
  },
  {
    id: "tx_567890",
    paymentLinkId: "pay_ghi789",
    amount: "50",
    currency: "USDT",
    network: "polygon",
    status: "completed",
    date: "2025-04-26",
    from: "0x5678...9012",
  },
];

export const sampleUserProfile = {
  username: "koleenbp",
  email: "koleen@example.com",
  walletAddress: "0x1234...5678",
  joinedDate: "2025-01-15",
  notificationPreferences: {
    paymentReceived: true,
    paymentFailed: true,
  },
};
