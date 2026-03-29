"use client";

import Link from "next/link";

export default function PortfolioPdfActions() {
  return (
    <div className="pdf-screen-only sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[210mm] items-center justify-between gap-3 px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">포트폴리오 PDF</p>
          <p className="text-xs text-slate-500">
            버튼을 눌러 바로 PDF로 저장할 수 있습니다.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/kr/"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
          >
            사이트로 돌아가기
          </Link>
          <button
            type="button"
            onClick={() => window.print()}
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            PDF 저장
          </button>
        </div>
      </div>
    </div>
  );
}
