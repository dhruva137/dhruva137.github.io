export function getLinkText(url: string | undefined): string {
  if (!url) return "Click here";
  
  const lowerUrl = url.toLowerCase();
  
  if (lowerUrl.includes("github.com")) {
    return "Code is here";
  }
  
  if (lowerUrl.includes("huggingface.co")) {
    return "Click to see the model";
  }

  if (lowerUrl.includes("vercel.app")) {
    return "Click to see the website";
  }
  
  if (lowerUrl.includes("firstpost.com")) {
    return "Read the article";
  }

  if (lowerUrl.includes("apartresearch.com")) {
    return "Read on Apart Research";
  }
  
  return "Click here";
}
