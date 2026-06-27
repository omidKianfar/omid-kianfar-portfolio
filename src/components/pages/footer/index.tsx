const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-sm text-slate-400 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Omid Kianfar. All rights reserved.</p>

        <div className="flex gap-6">
          <a
            href="https://github.com/omid-kianfar"
            target="_blank"
            className="hover:text-sky-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/omid-kianfar"
            target="_blank"
            className="hover:text-sky-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:omid.kianfar@email.com"
            className="hover:text-sky-400 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
