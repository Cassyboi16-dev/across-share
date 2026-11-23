"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CgBulb } from "react-icons/cg";
import { MdAdd, MdClose, MdCloudUpload, MdLink, MdMenu } from "react-icons/md";

export default function Dashboard() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [composerOpen, setComposerOpen] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);

    function addFiles(event) {
        const newFiles = Array.from(event.target.files || []);

        setSelectedFiles((currentFiles) => [
            ...currentFiles,
            ...newFiles.filter((file) => !currentFiles.some(
                (currentFile) =>
                    currentFile.name === file.name &&
                    currentFile.size === file.size &&
                    currentFile.lastModified === file.lastModified
            )),
        ]);
        event.target.value = "";
    }

    function removeFile(fileToRemove) {
        setSelectedFiles((currentFiles) =>
            currentFiles.filter((file) => file !== fileToRemove)
        );
    }

    return (
        <main className="min-h-dvh bg-[#f7f8f4] text-[#292b25] md:flex">
            <header className="flex h-16 items-center justify-between border-b border-[#e6e8df] bg-white px-4 shadow-sm md:hidden">
                <span className="text-sm font-bold tracking-wide text-[#526c3c]">Workspace</span>
                <button
                    type="button"
                    aria-label={mobileMenuOpen ? "Close dashboard menu" : "Open dashboard menu"}
                    aria-expanded={mobileMenuOpen}
                    aria-controls="dashboard-sidebar"
                    onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
                    className="flex size-10 items-center justify-center rounded-xl text-2xl text-[#405a31] transition hover:bg-[#f1f4eb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#71845a]"
                >
                    {mobileMenuOpen ? <MdClose /> : <MdMenu />}
                </button>
            </header>

            <aside
                id="dashboard-sidebar"
                className={`${mobileMenuOpen ? "flex" : "hidden"} w-full flex-col border-b border-[#e6e8df] bg-white px-4 py-5 md:flex md:min-h-dvh md:w-72 md:shrink-0 md:border-b-0 md:border-r md:px-6 md:py-8`}
            >
                <div className="mb-8 flex items-center justify-center rounded-2xl bg-[#f7f8f4] p-3 md:mb-10">
                    <Link
                        href="/"
                        aria-label="Go to Across Share home"
                        className="rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#71845a]"
                    >
                        <Image
                            src="/Across Share.svg"
                            width={100}
                            height={100}
                            alt="Across Share Logo"
                            loading="eager"
                            className="w-30 h-30 rounded-full"
                        />
                    </Link>
                </div>

                <p className="mb-3 px-3 text-xs font-bold uppercase tracking-[0.16em] text-[#92958a]">
                    Workspace
                </p>
                <nav aria-label="Dashboard" className="flex flex-col gap-2">
                    <button
                        type="button"
                        onClick={() => {
                            setMobileMenuOpen(false);
                            setComposerOpen(true);
                        }}
                        className="flex min-h-12 items-center gap-3 rounded-xl bg-[#5f7f43] px-4 text-left text-sm font-bold text-white shadow-sm transition hover:bg-[#526e39] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#71845a]"
                    >
                        <MdAdd className="size-5 shrink-0" />
                        New Post
                    </button>
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex min-h-12 items-center gap-3 rounded-xl px-4 text-left text-sm font-semibold text-[#62665a] transition hover:bg-[#f1f4eb] hover:text-[#405a31] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#71845a]"
                    >
                        <MdLink className="size-5 shrink-0" />
                        Link Handles
                    </button>
                    <button type="button" onClick={() => setMobileMenuOpen(false)} className="flex min-h-12 items-center gap-3 px-4 text-left text-sm font-semibold bg-lime-200 rounded-xl hover:shadow-sm hover:shadow-lime-400">
                        <CgBulb className="size-5 shrink-0" />
                        Planning
                    </button>
                </nav>

                <div className="mt-8 border-t border-[#edf0e8] pt-5 text-xs leading-5 text-[#92958a] md:mt-auto">
                    Manage your social workspace
                </div>
            </aside>

            <section className="min-w-0 flex-1 p-5 md:p-8">
                {composerOpen ? (
                    <div className="mx-auto max-w-3xl">
                        <div className="mb-6">
                            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#71845a]">
                                Create
                            </p>
                            <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                                New post
                            </h1>
                            <p className="mt-2 text-sm leading-6 text-[#777a70]">
                                Add photos or videos from your device to get started.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-dashed border-[#b8c5a6] bg-white p-6 text-center shadow-sm sm:p-10">
                            <input
                                id="post-media"
                                type="file"
                                accept="image/*,video/*"
                                multiple
                                onChange={addFiles}
                                className="sr-only"
                            />
                            <label
                                htmlFor="post-media"
                                className="mx-auto flex min-h-44 max-w-xl cursor-pointer flex-col items-center justify-center rounded-xl px-4 py-8 transition hover:bg-[#f7f8f4] focus-within:ring-2 focus-within:ring-[#71845a]"
                            >
                                <span className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-[#edf2e7] text-3xl text-[#5f7f43]">
                                    <MdCloudUpload aria-hidden="true" />
                                </span>
                                <span className="font-bold text-[#3d4f30]">
                                    Choose files from your device
                                </span>
                                <span className="mt-2 text-sm text-[#85887d]">
                                    Images and videos · You can select multiple files
                                </span>
                            </label>
                        </div>

                        {selectedFiles.length > 0 && (
                            <div className="mt-6 rounded-2xl border border-[#e6e8df] bg-white p-5 shadow-sm">
                                <h2 className="font-bold">
                                    Selected files ({selectedFiles.length})
                                </h2>
                                <ul aria-live="polite" className="mt-3 divide-y divide-[#edf0e8]">
                                    {selectedFiles.map((file) => (
                                        <li
                                            key={`${file.name}-${file.size}-${file.lastModified}`}
                                            className="flex items-center justify-between gap-4 py-3"
                                        >
                                            <span className="min-w-0">
                                                <span className="block truncate text-sm font-semibold">
                                                    {file.name}
                                                </span>
                                                <span className="text-xs text-[#85887d]">
                                                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                                                </span>
                                            </span>
                                            <button
                                                type="button"
                                                onClick={() => removeFile(file)}
                                                aria-label={`Remove ${file.name}`}
                                                className="shrink-0 rounded-lg px-3 py-2 text-sm font-semibold text-[#7b4b42] transition hover:bg-[#fbf0ed] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a66050]"
                                            >
                                                Remove
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-[#e6e8df] bg-white p-6 shadow-sm sm:mt-16 sm:p-10">
                        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#71845a]">
                            Dashboard
                        </p>
                        <h1 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                            Welcome to your workspace
                        </h1>
                        <p className="mt-2 text-sm leading-6 text-[#777a70]">
                            Select New Post to add photos or videos from your device.
                        </p>
                    </div>
                )}
            </section>
        </main>
    )
}