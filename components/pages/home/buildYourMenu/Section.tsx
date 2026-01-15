import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  backgroundImage?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  id,
  backgroundImage,
}) => {
  if (backgroundImage) {
    return (
      <section
        id={id}
        className={`relative w-full py-20 md:py-32 ${className}`}
      >
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 z-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          {children}
        </div>
      </section>
    );
  }

  return (
    <section
      id={id}
      className={`w-full py-20 md:py-28 px-6 md:px-12 ${className}`}
    >
      <div className="container mx-auto">{children}</div>
    </section>
  );
};

export default Section;
