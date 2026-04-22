import { Code2, Bug, CodeXml, Network, Zap, Target, Smartphone, Image as ImageIcon, Paintbrush, Sparkles, LayoutTemplate, MonitorPlay, Video, Megaphone, Mail, TrendingUp, Cpu, FileText, Globe, BarChart, Box, Newspaper, ShieldAlert, ShieldX, Mic, MessageCircle, FileSearch, Database } from "lucide-react";

export const DOMAINS = [
  "All", 
  "Creative and Design Tools", 
  "Marketing and Sales", 
  "Content and Publishing", 
  "Business Management", 
  "Productivity and Collaboration"
];

export const AGENTS = [
  // Productivity and Collaboration
  { name: "AI Chatbot", desc: "Conversational AI assistant for general-purpose Q&A and brainstorming.", domain: "Productivity and Collaboration", icon: MessageCircle },
  { name: "Research Agent", desc: "Deep-dive research on any topic with sourced citations.", domain: "Productivity and Collaboration", icon: FileSearch },
  { name: "Knowledge Base", desc: "Build and query a custom AI knowledge base from your docs.", domain: "Productivity and Collaboration", icon: Database },
  { name: "Code Assistant", desc: "Write, debug, and refactor code with AI-powered suggestions.", domain: "Productivity and Collaboration", icon: Code2 },
  { name: "Bug Detective", desc: "Analyze error logs and stack traces to pinpoint root causes.", domain: "Productivity and Collaboration", icon: Bug },
  { name: "App Code Generator", desc: "Generate full app boilerplate with file structure & setup guide.", domain: "Productivity and Collaboration", icon: CodeXml },
  
  // Business Management
  { name: "Automation Builder", desc: "Create automated workflows connecting multiple AI tools.", domain: "Business Management", icon: Network }, 
  { name: "API Connector", desc: "Integrate external APIs and build custom data pipelines.", domain: "Business Management", icon: Zap },
  { name: "Career Advisor", desc: "Get a personalized AI career roadmap with skills and job targets.", domain: "Business Management", icon: Target },
  { name: "WhatsApp AI Chatbot", desc: "Build & deploy AI-powered WhatsApp bots for your business.", domain: "Business Management", icon: Smartphone },
  
  // Creative and Design Tools
  { name: "Image Generator", desc: "Create stunning images from text prompts using diffusion models.", domain: "Creative and Design Tools", icon: ImageIcon },
  { name: "Logo Generator", desc: "AI-powered brand logo design with SVG, images & design brief.", domain: "Creative and Design Tools", icon: Paintbrush },
  { name: "Anime Art Maker", desc: "Transform photos or descriptions into stunning anime art.", domain: "Creative and Design Tools", icon: Sparkles },
  { name: "App UI/UX Designer", desc: "Generate wireframes, color palettes, components & Figma prompts.", domain: "Creative and Design Tools", icon: LayoutTemplate },
  { name: "Web Designer", desc: "Generate complete websites with live preview & instant download.", domain: "Creative and Design Tools", icon: MonitorPlay },
  { name: "AI Ad Video Generator", desc: "Generate stunning ad videos with AI using Veo 3.1.", domain: "Creative and Design Tools", icon: Video },
  { name: "Video Generator", desc: "Generate short video clips from text descriptions and scripts.", domain: "Creative and Design Tools", icon: Video },

  // Marketing and Sales
  { name: "AI Ad Generator", desc: "Generate complete ads with AI copy, design brief & live preview.", domain: "Marketing and Sales", icon: Megaphone },
  { name: "Email Composer", desc: "Draft professional emails with context-aware AI suggestions.", domain: "Marketing and Sales", icon: Mail },
  { name: "SEO Optimizer", desc: "Analyze and optimize content for search engine rankings.", domain: "Marketing and Sales", icon: TrendingUp },
  { name: "Prompt Generator", desc: "Generate optimized prompts for Midjourney, DALL-E, Sora & more.", domain: "Marketing and Sales", icon: Cpu },

  // Content and Publishing
  { name: "Doc Summarizer", desc: "Extract key insights and summaries from long documents.", domain: "Content and Publishing", icon: FileText },
  { name: "Content Writer", desc: "Generate blog posts, emails, and marketing copy.", domain: "Content and Publishing", icon: FileText },
  { name: "Translator", desc: "Translate text between 100+ languages with natural fluency.", domain: "Content and Publishing", icon: Globe },
  { name: "Data Analyzer", desc: "Upload datasets and get instant visual analytics and insights.", domain: "Content and Publishing", icon: BarChart },
  { name: "Web Scraper", desc: "Extract structured data from any website automatically.", domain: "Content and Publishing", icon: Box },
  { name: "Latest News", desc: "AI-summarized Indian & international news from the last 24 hours.", domain: "Content and Publishing", icon: Newspaper },
  { name: "AI Trend Analyst", desc: "Industry trend analysis with stats, predictions & PDF export.", domain: "Content and Publishing", icon: TrendingUp },
  { name: "Fake News Detector", desc: "AI credibility analysis with fact-checks, bias & fallacy detection.", domain: "Content and Publishing", icon: ShieldAlert },
  { name: "Instagram Spam Detector", desc: "Detect spam, bots & deception in Instagram comments and bios.", domain: "Content and Publishing", icon: ShieldX },
  { name: "Content Moderator", desc: "Detect and filter harmful or inappropriate content.", domain: "Content and Publishing", icon: ShieldAlert },
  { name: "Speech to Text", desc: "Transcribe audio files and live speech with high accuracy.", domain: "Content and Publishing", icon: Mic },
];
