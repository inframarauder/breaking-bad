import React from "react";
import GitHubButton from "react-github-btn";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        Created with <i>&hearts;</i> by{" "}
        <a
          href="https://subhasis.tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          Subhasis Das.
        </a>
      </div>
      <div>
        <GitHubButton
          href="https://github.com/subhasis020299/breaking-bad/fork"
          data-size="small"
          aria-label="Fork subhasis020299/breaking-bad on GitHub"
        >
          Fork on GitHub
        </GitHubButton>
      </div>
    </div>
  );
};

export default Footer;
