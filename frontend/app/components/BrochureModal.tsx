"use client";

import { useEffect, useState } from "react";
import Button from "./Button";

interface BrochureModalProps {
    isOpen: boolean;
    onClose: () => void;
    pdfUrl: string;
    title: string;
    downloadFileName: string;
    footerText?: string;
}

export default function BrochureModal({
    isOpen,
    onClose,
    pdfUrl,
    title,
    downloadFileName,
    footerText
}: BrochureModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity cursor-pointer"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-5xl bg-[var(--blue-darkest)] border border-[var(--gold)]/30 rounded-2xl shadow-2xl flex flex-col h-[85vh] overflow-hidden animate-fade-in-up">

                {/* Header */}
                <div className="flex items-center justify-between p-4 md:p-6 border-b border-[var(--gold)]/10 bg-[var(--blue-dark)]">
                    <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-[var(--gold)] rounded-full"></span>
                        {title}
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-white/60 hover:text-[var(--gold)] transition-colors p-1"
                        aria-label="Close modal"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body (PDF Iframe) */}
                <div className="flex-1 bg-white relative">
                    <iframe
                        src={pdfUrl}
                        className="w-full h-full absolute inset-0 border-none"
                        title={title}
                    />
                </div>

                {/* Footer */}
                <div className="p-4 md:p-6 bg-[var(--blue-dark)] border-t border-[var(--gold)]/10 flex justify-between items-center gap-4">
                    {footerText && (
                        <span className="text-white/40 text-sm hidden sm:block">
                            {footerText}
                        </span>
                    )}
                    <div className="flex gap-3 ml-auto">
                        <Button
                            variant="outline"
                            onClick={onClose}
                            className="border-white/20 text-white hover:bg-white/10"
                        >
                            Close
                        </Button>
                        <a
                            href={pdfUrl}
                            download={downloadFileName}
                            className="no-underline"
                        >
                            <Button
                                variant="primary"
                                className="bg-[var(--gold)] text-[var(--blue-darkest)] font-bold hover:brightness-110 border-none shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] transition-all"
                            >
                                Download Brochure
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
