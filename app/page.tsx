import Image from "next/image";

export default function Home() {
  return (
    <>
      <body className="flex flex-col justify-between w-full h-screen gap-10">
        <header className="sticky top-0 z-50 bg-white shadow-md w-full">
          <nav className="p-4">导航栏</nav>
        </header>
        <main className="flex w-full items-center justify-center flex-col">
          页面开发中
          <div className="flex items-center justify-center  pt-6">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent"></div>
          </div>
        </main>
        <footer className="flex w-full items-center justify-center"></footer>
      </body>
    </>
  );
}
