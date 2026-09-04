export function useRouter() {
  return {
    push: (url: string) => {
      if (typeof window !== "undefined") {
        window.location.href = url;
      }
    },
    replace: (url: string) => {
      if (typeof window !== "undefined") {
        window.location.replace(url);
      }
    },
    back: () => {
      if (typeof window !== "undefined") {
        window.history.back();
      }
    },
    forward: () => {
      if (typeof window !== "undefined") {
        window.history.forward();
      }
    },
    refresh: () => {
      if (typeof window !== "undefined") {
        window.location.reload();
      }
    },
  };
}

export function usePathname() {
  if (typeof window !== "undefined") {
    return window.location.pathname;
  }
  return "";
}

export function redirect(url: string) {
  if (typeof window !== "undefined") {
    window.location.href = url;
  }
}
