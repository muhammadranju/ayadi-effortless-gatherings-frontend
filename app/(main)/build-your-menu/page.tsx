import BuildYourMenu from "./BuildYourMenu";

export const metadata = {
  title: "Build Your Menu - AYADI",
  description: "Build Your Menu ",
};

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function page(props: PageProps) {
  const searchParams = await props.searchParams;
  const isPackageMode = searchParams?.mode === "package";
  const packageId =
    typeof searchParams?.packageId === "string"
      ? searchParams.packageId
      : undefined;

  return (
    <>
      <BuildYourMenu isPackageMode={isPackageMode} packageId={packageId} />
    </>
  );
}

export default page;
