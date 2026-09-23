export interface ProfileData {
  name: string;
  agencyName: string;
  tagline: string;
  bio: string;
  location: string;
  education: string;
  experience: string;
  phone: string;
  whatsappLink: string;
  roles: string[];
  socialLinks: {
    facebook: string;
    youtube: string;
    linkedin: string;
    youtubeHandle: string;
    facebookHandle: string;
  };
  bannerImages: {
    src: string;
    alt: string;
    title: string;
  }[];
  stats: {
    label: string;
    value: string;
    subtext: string;
    icon: string;
  }[];
  services: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    icon: string;
  }[];
  portfolio: {
    id: string;
    title: string;
    category: 'youtube-ads' | 'lyricist-poetry' | 'social-media' | 'modeling';
    videoUrl?: string;
    embedId?: string;
    thumbnail: string;
    description: string;
    tags: string[];
  }[];
  internetRecords: {
    platform: string;
    handle: string;
    details: string;
    verified: boolean;
    link: string;
  }[];
}

export const raviMehmiData: ProfileData = {
  name: "Ravi Mehmi",
  agencyName: "RM Media",
  tagline: "Actor & Model ✍️ Song Writer | 📢 Social Media Promotion | ▶️ YouTube Ads | RM MEDIA",
  bio: "Green Land Business School se educated aur Hawk Records jaise reputed labels ke saath kaam kar chuke Ravi Mehmi (रवि मेहमी) art aur digital marketing ka ek behtareen mixture hain. Ludhiana, Punjab se operate karte hue, RM Media ke zariye creators, artists aur businesses ko targeted Google/YouTube Ads aur creative promotional strategies se boost karte hain.",
  location: "Ludhiana, Punjab, India",
  education: "GREEN LAND BUSINESS SCHOOL",
  experience: "Hawk Records (Model / Writer / Producer)",
  phone: "+91 95692-99997",
  whatsappLink: "https://wa.me/919569299997?text=Hello%20Ravi%20Mehmi,%20I%20want%20to%20inquire%20about%20RM%20Media%20promotional%20services",
  bannerImages: [
    {
      src: "/images/banner2.jpg",
      alt: "YouTube Channel Monetization Available RM Media",
      title: "YouTube Monetization & Partner Program"
    },
    {
      src: "/images/banner3.jpg",
      alt: "YouTube & Google Ads Worldwide & India Offer RM Media",
      title: "YouTube & Google Ads Package Offers"
    },
    {
      src: "/images/banner1.jpg",
      alt: "Small Investment Big Returns Poster Ravi Mehmi",
      title: "Digital Promotion & Growth Plan"
    }
  ],
  roles: [
    "Online Social Media Promoter",
    "Punjabi Lyricist & Poet",
    "Actor & Model",
    "YouTube & Google Ads Specialist",
    "Digital Media Manager (RM Media)"
  ],
  socialLinks: {
    facebook: "https://www.facebook.com/ravi.mehmi.8070/",
    youtube: "https://www.youtube.com/c/RaviMehmi",
    linkedin: "https://www.linkedin.com/in/ravimehmi/",
    youtubeHandle: "@RaviMehmi",
    facebookHandle: "@ravi.mehmi.8070"
  },
  stats: [
    {
      label: "YouTube Subscribers",
      value: "1.05K+",
      subtext: "@RaviMehmi Channel Base",
      icon: "Youtube"
    },
    {
      label: "Video Content",
      value: "70+",
      subtext: "Promotional & Creative Uploads",
      icon: "Video"
    },
    {
      label: "Promotional Campaigns",
      value: "100+",
      subtext: "YouTube & Social Ads Executed",
      icon: "TrendingUp"
    },
    {
      label: "Industry Connections",
      value: "64+",
      subtext: "LinkedIn Media Professionals",
      icon: "Users"
    }
  ],
  services: [
    {
      id: "youtube-ads",
      title: "YouTube & Google Ads Management",
      subtitle: "Targeted Video Reach & Organic Growth",
      description: "Punjabi music videos, songs, aur content creators ke liye highly targeted YouTube Ads campaigns run karna taaki right audience tak viral reach pahunch sake.",
      features: [
        "Demographic & Interest Targeted Ads",
        "Viewers to Subscribers Conversion Strategy",
        "Budget Optimization & ROI Analytics",
        "Copyright & Monetization Protection Advice"
      ],
      icon: "Megaphone"
    },
    {
      id: "social-media-promotion",
      title: "Social Media Boosting & Page Management",
      subtitle: "RM Media Facebook & Instagram Reach",
      description: "Facebook, Instagram reels, aur multi-platform social boosting for singers, actors, models, aur business brands.",
      features: [
        "Instagram & Facebook Reel Promotion",
        "Page Like & Engagement Growth",
        "Event & Music Release Campaign",
        "RM Media Network Distribution"
      ],
      icon: "Share2"
    },
    {
      id: "lyric-writing",
      title: "Punjabi Song Writing & Shayari",
      subtitle: "Creative Concept & Scripting",
      description: "Original Punjabi lyrical content, romantic/cultural poetry, dialogue writing, aur music video concepts.",
      features: [
        "Original Punjabi Lyrics Writing",
        "Shayari & Commercial Jingles",
        "Music Video Storyboarding",
        "Co-Production with Record Labels"
      ],
      icon: "PenTool"
    },
    {
      id: "artist-branding",
      title: "Digital PR & Modeling Portfolio",
      subtitle: "Hawk Records Experience & Branding",
      description: "New upcoming singers aur actors ke liye complete digital identity creation aur press release management.",
      features: [
        "Online Brand Positioning",
        "Media Interview & Podcast Coordination",
        "Portfolio & Profile Audit",
        "Ludhiana & Punjab Media Network"
      ],
      icon: "Sparkles"
    }
  ],
  portfolio: [
    {
      id: "p1",
      title: "Ravi Mehmi Official Channel Shorts & Videos",
      category: "youtube-ads",
      embedId: "dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
      description: "Ravi Mehmi official YouTube channel featuring online promotion tips, Punjabi songs showcase, and shorts content.",
      tags: ["YouTube Ads", "Punjabi Music", "RM Media"]
    },
    {
      id: "p2",
      title: "Hawk Records Modeling & Lyrics Showcase",
      category: "lyricist-poetry",
      thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800",
      description: "Creative writing, modeling projects, and production coordination with Hawk Records.",
      tags: ["Hawk Records", "Lyricist", "Modeling"]
    },
    {
      id: "p3",
      title: "Digital Campaign for Punjabi Music Singers",
      category: "social-media",
      thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
      description: "RM Media targeted social promotion driving massive organic engagement across Ludhiana and global Punjabi diaspora.",
      tags: ["RM Media", "Social Boosting", "Ludhiana"]
    }
  ],
  internetRecords: [
    {
      platform: "YouTube Official Channel",
      handle: "@RaviMehmi",
      details: "1.05K Subscribers, 70 Videos. Online Social Media Promoter and Punjabi Lyricist.",
      verified: true,
      link: "https://www.youtube.com/c/RaviMehmi"
    },
    {
      platform: "Facebook Official Profile & Agency",
      handle: "Ravi Mehmi (ravi.mehmi.8070) / RM MEDIA",
      details: "Actor & Model ✍️ Song Writer | Social Media Promotion | YouTube Ads | RM MEDIA.",
      verified: true,
      link: "https://www.facebook.com/ravi.mehmi.8070/"
    },
    {
      platform: "LinkedIn Professional Profile",
      handle: "Ravi Mehmi - Modal/Writer/Producer",
      details: "Experience: Hawk Records | Education: GREEN LAND BUSINESS SCHOOL | Location: Ludhiana, Punjab.",
      verified: true,
      link: "https://www.linkedin.com/in/ravimehmi/"
    }
  ]
};
