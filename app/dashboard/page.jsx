"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { CgBulb } from "react-icons/cg";
import { FaBackward, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import { MdAdd, MdClose, MdCloudUpload, MdDeleteOutline, MdLink, MdMenu } from "react-icons/md";

export default function Dashboard() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeView, setActiveView] = useState("dashboard");
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [ideaTitleDraft, setIdeaTitleDraft] = useState("");
    const [ideaContentDraft, setIdeaContentDraft] = useState("");
    const [editingIdeaId, setEditingIdeaId] = useState(null);
    const [ideas, setIdeas] = useState([]);

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

    function addIdea(event) {
        event.preventDefault();
        const title = ideaTitleDraft.trim();

        if (!title) {
            return;
        }

        setIdeas((currentIdeas) => [
            ...currentIdeas,
            {
                id: crypto.randomUUID(),
                title,
                content: ideaContentDraft.trim(),
            },
        ]);
        setIdeaTitleDraft("");
        setIdeaContentDraft("");
    }

    function openIdeaForEditing(idea) {
        setEditingIdeaId(idea.id);
        setIdeaTitleDraft(idea.title);
        setIdeaContentDraft(idea.content);
    }

    function saveIdea(event) {
        event.preventDefault();
        const title = ideaTitleDraft.trim();

        if (!title || !editingIdeaId) {
            return;
        }

        setIdeas((currentIdeas) =>
            currentIdeas.map((idea) =>
                idea.id === editingIdeaId
                    ? { ...idea, title, content: ideaContentDraft.trim() }
                    : idea
            )
        );
        cancelIdeaEditing();
    }

    function cancelIdeaEditing() {
        setEditingIdeaId(null);
        setIdeaTitleDraft("");
        setIdeaContentDraft("");
    }

    function removeIdea(ideaToRemove) {
        setIdeas((currentIdeas) =>
            currentIdeas.filter((idea) => idea.id !== ideaToRemove)
        );
        if (editingIdeaId === ideaToRemove) {
            cancelIdeaEditing();
        }
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
                            setActiveView("newPost");
                        }}
                        className="flex min-h-12 items-center gap-3 rounded-xl bg-[#5f7f43] px-4 text-left text-sm font-bold text-white shadow-sm transition hover:bg-[#526e39] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#71845a]"
                    >
                        <MdAdd className="size-5 shrink-0" />
                        New Post
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setMobileMenuOpen(false);
                            setActiveView("linkedHandles");
                        }}
                        className="flex min-h-12 items-center gap-3 rounded-xl px-4 text-left text-sm font-semibold text-[#62665a] transition hover:bg-[#f1f4eb] hover:text-[#405a31] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#71845a]"
                    >
                        <MdLink className="size-5 shrink-0" />
                        Link Handles
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setMobileMenuOpen(false);
                            setActiveView("planning");
                        }}
                        className="flex min-h-12 items-center gap-3 rounded-xl bg-lime-200 px-4 text-left text-sm font-semibold hover:shadow-sm hover:shadow-lime-400"
                    >
                        <CgBulb className="size-5 shrink-0" />
                        Planning
                    </button>
                </nav>

                <div className="mt-8 border-t border-[#edf0e8] pt-5 text-xs leading-5 text-[#92958a] md:mt-auto">
                    Manage your social workspace
                </div>
            </aside>

            <section className="min-w-0 flex-1 p-5 md:p-8">
                {activeView === "linkedHandles" ? (
                    <div className="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-4xl flex-col">
                        <button
                            type="button"
                            onClick={() => setActiveView("dashboard")}
                            className="flex w-fit items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-[#62665a] transition hover:bg-white hover:text-[#405a31] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#71845a]"
                        >
                            <FaBackward /> Back
                        </button>
                        <div className="flex flex-1 flex-col items-center justify-center py-10 text-center">
                            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#71845a]">
                                Social connections
                            </p>
                            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
                                Connect Your Favorite Platforms
                            </h1>
                            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                                <span aria-label="YouTube" role="img" className="flex size-16 items-center justify-center rounded-2xl border border-[#e6e8df] bg-white text-3xl text-[#ff0033] shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:size-20 sm:text-4xl">
                                    <FaYoutube aria-hidden="true" />
                                </span>
                                <span aria-label="Instagram" role="img" className="flex size-16 items-center justify-center rounded-2xl border border-[#e6e8df] bg-white text-3xl text-[#d62976] shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:size-20 sm:text-4xl">
                                    <BsInstagram aria-hidden="true" />
                                </span>
                                <span aria-label="TikTok" role="img" className="flex size-16 items-center justify-center rounded-2xl border border-[#e6e8df] bg-white text-3xl text-[#171717] shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:size-20 sm:text-4xl">
                                    <FaTiktok aria-hidden="true" />
                                </span>
                                <span aria-label="LinkedIn" role="img" className="flex size-16 items-center justify-center rounded-2xl border border-[#e6e8df] bg-white text-3xl text-[#0a66c2] shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:size-20 sm:text-4xl">
                                    <FaLinkedin aria-hidden="true" />
                                </span>
                                <span aria-label="X" role="img" className="flex size-16 items-center justify-center rounded-2xl border border-[#e6e8df] bg-white text-3xl text-[#171717] shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:size-20 sm:text-4xl">
                                    <BsTwitterX aria-hidden="true" />
                                </span>
                            </div>
                            <p className="mt-8 text-base font-semibold text-[#777a70]">
                                and so much more...
                            </p>
                        </div>
                        <div className="mx-auto mt-12 w-full max-w-3xl rounded-3xl border border-[#e6e8df] bg-white p-5 text-left shadow-sm sm:p-8">
                            <h2 className="text-xl font-black tracking-tight sm:text-2xl">
                                Available Platforms
                            </h2>
                            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                <div className="flex items-center gap-3 rounded-2xl border border-[#edf0e8] p-3 sm:p-4">
                                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#fff1f3] text-2xl text-[#ff0033]">
                                        <FaYoutube aria-hidden="true" />
                                    </span>
                                    <span className="min-w-0 flex-1 truncate text-sm font-bold">YouTube</span>
                                    <button type="button" aria-label="Connect YouTube" className="rounded-xl bg-[#5f7f43] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#526e39] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#71845a]">
                                        Connect
                                    </button>
                                </div>
                                <div className="flex items-center gap-3 rounded-2xl border border-[#edf0e8] p-3 sm:p-4">
                                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#fdf0f6] text-2xl text-[#d62976]">
                                        <BsInstagram aria-hidden="true" />
                                    </span>
                                    <span className="min-w-0 flex-1 truncate text-sm font-bold">Instagram</span>
                                    <button type="button" aria-label="Connect Instagram" className="rounded-xl bg-[#5f7f43] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#526e39] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#71845a]">
                                        Connect
                                    </button>
                                </div>
                                <div className="flex items-center gap-3 rounded-2xl border border-[#edf0e8] p-3 sm:p-4">
                                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#f1f1f1] text-2xl text-[#171717]">
                                        <FaTiktok aria-hidden="true" />
                                    </span>
                                    <span className="min-w-0 flex-1 truncate text-sm font-bold">TikTok</span>
                                    <button type="button" aria-label="Connect TikTok" className="rounded-xl bg-[#5f7f43] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#526e39] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#71845a]">
                                        Connect
                                    </button>
                                </div>
                                <div className="flex items-center gap-3 rounded-2xl border border-[#edf0e8] p-3 sm:p-4">
                                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#eef5fc] text-2xl text-[#0a66c2]">
                                        <FaLinkedin aria-hidden="true" />
                                    </span>
                                    <span className="min-w-0 flex-1 truncate text-sm font-bold">LinkedIn</span>
                                    <button type="button" aria-label="Connect LinkedIn" className="rounded-xl bg-[#5f7f43] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#526e39] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#71845a]">
                                        Connect
                                    </button>
                                </div>
                                <div className="flex items-center gap-3 rounded-2xl border border-[#edf0e8] p-3 sm:p-4">
                                    <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#f1f1f1] text-2xl text-[#171717]">
                                        <BsTwitterX aria-hidden="true" />
                                    </span>
                                    <span className="min-w-0 flex-1 truncate text-sm font-bold">X</span>
                                    <button type="button" aria-label="Connect X" className="rounded-xl bg-[#5f7f43] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#526e39] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#71845a]">
                                        Connect
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : activeView === "planning" ? (
                    <div className="mx-auto max-w-3xl">
                        <button
                            type="button"
                            onClick={() => setActiveView("dashboard")}
                            className="mb-6 flex w-fit items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-[#62665a] transition hover:bg-white hover:text-[#405a31] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#71845a]"
                        >
                            <FaBackward /> Back
                        </button>
                        <div className="mb-8">
                            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#71845a]">
                                Workspace
                            </p>
                            <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                                Planning
                            </h1>
                            <p className="mt-2 text-sm leading-6 text-[#777a70]">
                                Capture ideas and keep your content plans in one place.
                            </p>
                        </div>

                        <form
                            onSubmit={editingIdeaId ? saveIdea : addIdea}
                            className="rounded-2xl border border-[#e6e8df] bg-white p-5 shadow-sm sm:p-6"
                        >
                            <h2 className="text-lg font-black tracking-tight">
                                {editingIdeaId ? "Edit note" : "Add a note"}
                            </h2>
                            <label htmlFor="idea-title" className="mt-4 block text-sm font-bold text-[#3d4f30]">
                                Title
                            </label>
                            <input
                                id="idea-title"
                                type="text"
                                value={ideaTitleDraft}
                                onChange={(event) => setIdeaTitleDraft(event.target.value)}
                                placeholder="Give your idea a title"
                                required
                                className="mt-2 w-full rounded-xl border border-[#dfe4d7] bg-[#fcfdfb] p-3 text-sm outline-none transition placeholder:text-[#a0a397] focus:border-[#8da477] focus:ring-2 focus:ring-[#e5eddd]"
                            />
                            <label htmlFor="idea-content" className="mt-4 block text-sm font-bold text-[#3d4f30]">
                                Details <span className="font-normal text-[#92958a]">(optional)</span>
                            </label>
                            <textarea
                                id="idea-content"
                                value={ideaContentDraft}
                                onChange={(event) => setIdeaContentDraft(event.target.value)}
                                placeholder="Add any details for this idea..."
                                rows={4}
                                className="mt-3 w-full resize-y rounded-xl border border-[#dfe4d7] bg-[#fcfdfb] p-3 text-sm leading-6 outline-none transition placeholder:text-[#a0a397] focus:border-[#8da477] focus:ring-2 focus:ring-[#e5eddd]"
                            />
                            <div className="mt-4 flex justify-end gap-3">
                                {editingIdeaId && (
                                    <button
                                        type="button"
                                        onClick={cancelIdeaEditing}
                                        className="min-h-11 rounded-xl px-4 text-sm font-semibold text-[#62665a] transition hover:bg-[#f1f4eb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#71845a]"
                                    >
                                        Cancel
                                    </button>
                                )}
                                <button
                                    type="submit"
                                    disabled={!ideaTitleDraft.trim()}
                                    className="flex min-h-11 items-center gap-2 rounded-xl bg-[#5f7f43] px-5 text-sm font-bold text-white transition hover:bg-[#526e39] disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#71845a]"
                                >
                                    {!editingIdeaId && <MdAdd className="size-5" aria-hidden="true" />}
                                    {editingIdeaId ? "Save changes" : "Add note"}
                                </button>
                            </div>
                        </form>

                        <div className="mt-8">
                            <h2 className="text-lg font-black tracking-tight">
                                Your ideas <span className="text-sm font-semibold text-[#92958a]">({ideas.length})</span>
                            </h2>
                            {ideas.length > 0 ? (
                                <ul aria-live="polite" className="mt-4 space-y-3">
                                    {ideas.map((idea) => (
                                        <li
                                            key={idea.id}
                                            className="flex items-center gap-3 rounded-2xl border border-[#e6e8df] bg-white p-3 shadow-sm transition hover:border-[#cbd6bd] hover:shadow-md sm:p-4"
                                        >
                                            <button
                                                type="button"
                                                onClick={() => openIdeaForEditing(idea)}
                                                aria-label={`Edit note: ${idea.title}`}
                                                className="min-w-0 flex-1 truncate rounded-lg px-2 py-2 text-left text-sm font-bold text-[#3d4f30] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#71845a]"
                                            >
                                                {idea.title}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => removeIdea(idea.id)}
                                                aria-label={`Delete note: ${idea.title}`}
                                                className="flex size-9 shrink-0 items-center justify-center rounded-lg text-[#8a5a50] transition hover:bg-[#fbf0ed] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a66050]"
                                            >
                                                <MdDeleteOutline className="size-5" aria-hidden="true" />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="mt-4 rounded-2xl border border-dashed border-[#dfe4d7] bg-white/70 p-6 text-center text-sm text-[#85887d]">
                                    Your ideas will appear here.
                                </p>
                            )}
                        </div>
                    </div>
                ) : activeView === "newPost" ? (
                    <div className="mx-auto max-w-3xl">
                        <button
                            type="button"
                            onClick={() => setActiveView("dashboard")}
                            className="mb-6 flex items-center justify-center gap-2"
                        >
                            <FaBackward /> Back
                        </button>
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