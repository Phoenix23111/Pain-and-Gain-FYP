import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        type="button"
        className="text-gray-500 hover:text-gray-600"
        onClick={toggleSidebar}
        aria-controls="docs-sidebar"
        aria-label="Toggle navigation"
      >
        <span className="sr-only">Toggle Navigation</span>
        <svg
          className="flex-shrink-0 size-4"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>

      <div
        id="docs-sidebar"
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } hs-overlay hs-overlay-open:translate-x-0 transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300`}
      >
        <div className="px-6">
          <a
            className="flex- text-red-800 text-2xl font-bold"
            href="/"
            aria-label="Brand"
          >
            Pain and Gain
          </a>
        </div>
        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            <li>
              <a
                className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
                href="/Homepage"
              >
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Dashboard
              </a>
            </li>

            {/* Accordion for Users */}
            <Accordion title="Users">
              <ul
                className="hs-accordion-group ps-3 pt-2"
                data-hs-accordion-always-open
              >
                <Accordion title="Sub Menu 1">
                  <ul className="pt-2 ps-2">
                    <AccordionLink href="/Homepage" title="Link 1" />
                    <AccordionLink href="/Homepage" title="Link 2" />
                    <AccordionLink href="/Homepage" title="Link 3" />
                  </ul>
                </Accordion>
                <Accordion title="Sub Menu 2">
                  <ul className="pt-2 ps-2">
                    <AccordionLink href="/Homepage" title="Link 1" />
                    <AccordionLink href="/Homepage" title="Link 2" />
                    <AccordionLink href="/Homepage" title="Link 3" />
                  </ul>
                </Accordion>
              </ul>
            </Accordion>

            <Accordion title="Account">
              <ul className="pt-2 ps-2">
                <AccordionLink href="/Homepage" title="Link 1" />
                <AccordionLink href="/Homepage" title="Link 2" />
                <AccordionLink href="/Homepage" title="Link 3" />
              </ul>
            </Accordion>

            <Accordion title="Projects">
              <ul className="pt-2 ps-2">
                <AccordionLink href="/Homepage" title="Link 1" />
                <AccordionLink href="/Homepage" title="Link 2" />
                <AccordionLink href="/Homepage" title="Link 3" />
              </ul>
            </Accordion>

            <li>
              <a
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
                href="/Homepage"
              >
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" x2="16" y1="2" y2="6" />
                  <line x1="8" x2="8" y1="2" y2="6" />
                  <line x1="3" x2="21" y1="10" y2="10" />
                  <path d="M8 14h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 18h.01" />
                  <path d="M12 18h.01" />
                  <path d="M16 18h.01" />
                </svg>
                Calendar
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
                href="/Homepage"
              >
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                Documentation
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="hs-accordion" id={`${title.toLowerCase()}-accordion`}>
      <button
        type="button"
        className={`hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 ${
          isOpen ? "active" : ""
        }`}
        onClick={toggleAccordion}
      >
        {title}
        <svg
          className={`hs-accordion-active:${
            isOpen ? "block" : "hidden"
          } ms-auto ${
            !isOpen ? "block" : "hidden"
          } size-4 text-gray-600 group-hover:text-gray-500`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
        <svg
          className={`hs-accordion-active:${
            !isOpen ? "block" : "hidden"
          } ms-auto ${
            isOpen ? "block" : "hidden"
          } size-4text-gray-600 group-hover
          `}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div
        id={`${title.toLowerCase()}-accordion`}
        className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
          isOpen ? "" : "hidden"
        }`}
      >
        {children}
      </div>
    </li>
  );
};

const AccordionLink = ({ href, title }) => {
  return (
    <li>
      <a
        className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
        href={href}
      >
        {title}
      </a>
    </li>
  );
};

export default Sidebar;
