import { siteConfig } from "@/lib/site";

export const guides = {
  "iptv-firestick-setup": {
    title: "IPTV Firestick Setup Guide",
    description:
      "Step-by-step Fire Stick setup instructions for IPTV apps, activation, network checks, and playback best practices.",
    eyebrow: "Setup Guide",
    intro:
      "Use this guide to install your IPTV player, add your subscription details safely, and get smoother playback on Amazon Fire TV devices.",
    bullets: [
      "Choose a trusted IPTV player that supports Xtream Codes or M3U playlists.",
      "Keep Fire OS updated before activating a new subscription.",
      "Use 5 GHz Wi-Fi or wired Ethernet for the best live-stream stability."
    ],
    sections: [
      {
        heading: "1. Prepare the device before activation",
        body:
          "Restart the Fire Stick, install pending updates, and verify that your internet speed and home router are stable. A clean baseline removes many false buffering issues before setup starts.",
        points: ["Update Fire OS", "Clear unused apps", "Confirm strong Wi-Fi signal"]
      },
      {
        heading: "2. Add your IPTV account securely",
        body:
          "Enter the Xtream Codes details or M3U playlist exactly as provided. Save credentials in one place and avoid copying old login data from previous services that may conflict.",
        points: ["Use the exact server URL", "Double-check username and password", "Test live TV and VOD after login"]
      },
      {
        heading: "3. Optimize playback for everyday use",
        body:
          "Once logged in, set a stable video output mode, enable adaptive playback if your player supports it, and test major channel categories like sports and movies.",
        points: ["Prefer hardware decoding when supported", "Use 5 GHz Wi-Fi", "Restart the app after first sync"]
      }
    ]
  },
  "fix-iptv-buffering": {
    title: "How To Fix IPTV Buffering",
    description:
      "Practical IPTV buffering fixes covering Wi-Fi, router setup, app settings, background traffic, and peak-time stream stability.",
    eyebrow: "Troubleshooting",
    intro:
      "Buffering is often a network or playback configuration problem rather than a full service failure. Start with these checks before replacing your setup.",
    bullets: [
      "Test your line on another device to isolate player issues from network issues.",
      "Restart the router and the IPTV app before making larger changes.",
      "Peak-hour sports channels need better home network stability than casual VOD playback."
    ],
    sections: [
      {
        heading: "1. Check the network first",
        body:
          "Weak Wi-Fi, overloaded routers, and heavy background downloads are the most common causes of playback interruptions. Move streaming devices closer to the router or use Ethernet when possible.",
        points: ["Pause downloads and cloud backups", "Switch to 5 GHz Wi-Fi", "Reboot router and streaming device"]
      },
      {
        heading: "2. Review the app and device settings",
        body:
          "Some players handle codecs and buffering differently. Test hardware decoding, clear cache, and reduce output quality temporarily to confirm whether the issue is bandwidth related.",
        points: ["Clear player cache", "Enable hardware decoding", "Compare live TV and VOD performance"]
      },
      {
        heading: "3. Use a stable route when your ISP is inconsistent",
        body:
          "If buffering is limited to certain times or certain regions, a VPN can sometimes improve routing quality. Choose a server close to your device region and avoid overloaded endpoints.",
        points: ["Test a nearby VPN endpoint", "Avoid crowded free VPNs", "Retest the same channel after changes"]
      }
    ]
  },
  "best-vpn-for-iptv": {
    title: "Best VPN Approach For IPTV Stability",
    description:
      "A practical guide to choosing a VPN setup for IPTV with emphasis on speed, regional routing, privacy, and everyday usability.",
    eyebrow: "VPN Guide",
    intro:
      "The best VPN setup for IPTV is one that improves routing without slowing down playback. Look for fast nearby locations, stable apps, and easy device support.",
    bullets: [
      "Choose VPN servers close to your real viewing region for the lowest latency.",
      "Prioritize speed, uptime, and app reliability over large marketing claims.",
      "Test the same channel with and without the VPN to confirm improvement."
    ],
    sections: [
      {
        heading: "1. What matters most in an IPTV VPN",
        body:
          "Speed consistency matters more than huge server counts. A VPN with stable nearby nodes, low-latency routing, and reliable device apps is usually the best fit for live TV.",
        points: ["Fast nearby servers", "Apps for TV and mobile", "Reliable reconnect behavior"]
      },
      {
        heading: "2. How to test a VPN correctly",
        body:
          "Test one live sports channel, one movie stream, and one VOD title using the same device and time period. This gives a more realistic picture than generic speed tests alone.",
        points: ["Compare before and after", "Use the same device", "Watch for evening peak-time changes"]
      },
      {
        heading: "3. Combine VPN use with a clean local setup",
        body:
          "Even the best VPN cannot fix a weak Wi-Fi signal or overloaded home network. Pair VPN testing with router checks, app cleanup, and updated device firmware.",
        points: ["Maintain a strong Wi-Fi signal", "Keep streaming apps updated", "Use Ethernet where possible"]
      }
    ]
  }
};

export function getGuideMetadata(slug) {
  const guide = guides[slug];

  return {
    title: `${guide.title} | ${siteConfig.name}`,
    description: guide.description,
    alternates: {
      canonical: `${siteConfig.siteUrl}/${slug}`
    },
    openGraph: {
      title: `${guide.title} | ${siteConfig.name}`,
      description: guide.description,
      url: `${siteConfig.siteUrl}/${slug}`,
      images: [`${siteConfig.siteUrl}/pricing-showcase.webp`]
    }
  };
}
