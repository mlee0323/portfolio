import {
  about,
  certifications,
  education,
  personalProjects,
  projects,
  skillCategories,
} from "@/lib/data";
import PortfolioPdfActions from "@/components/PortfolioPdfActions";

export const metadata = {
  title: "이민석 포트폴리오 PDF",
  description: "이민석 DevOps 엔지니어 포트폴리오 PDF 버전",
};

const contacts = [
  {
    label: "이메일",
    value: "minseoklee0323@gmail.com",
    href: "mailto:minseoklee0323@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/mlee0323",
    href: "https://github.com/mlee0323",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/minseok-lee-1540992a9",
    href: "https://linkedin.com/in/minseok-lee-1540992a9",
  },
  {
    label: "Blog",
    value: "mlee0323.github.io",
    href: "https://mlee0323.github.io/",
  },
];

const capabilityGroups = [
  {
    title: "클라우드 인프라",
    sourceTitles: ["AWS Services", "Containers & Orchestration"],
  },
  {
    title: "배포 자동화",
    sourceTitles: ["CI / CD", "IaC & Config"],
  },
  {
    title: "운영 및 개발",
    sourceTitles: ["Monitoring & Logging", "Development", "Web & Database"],
  },
];

const selectedProjects = [...projects, ...personalProjects].map((project) => ({
  ...project,
  highlights: project.detail.kr.slice(0, 4),
}));

const acquiredCertifications = certifications.filter((cert) => !cert.preparing);
const preparingCertifications = certifications.filter((cert) => cert.preparing);

function getSkillNames(sourceTitles) {
  return skillCategories
    .filter((category) => sourceTitles.includes(category.title))
    .flatMap((category) => category.skills.map((skill) => skill.name));
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-5">
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold text-slate-950">{title}</h2>
      {description ? (
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}

export default function PortfolioPdfPage() {
  return (
    <div className="min-h-screen bg-slate-200 py-8 text-slate-900 print:bg-white print:py-0">
      <PortfolioPdfActions />

      <main className="mx-auto flex max-w-[210mm] flex-col gap-6 print:gap-0">
        <section className="pdf-sheet">
          <header className="pdf-avoid-break rounded-[28px] bg-slate-950 px-8 py-8 text-white">
            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.28em] text-sky-300">
                  Cloud Infrastructure &amp; DevOps Portfolio
                </p>
                <h1 className="text-4xl font-semibold tracking-tight">이민석</h1>
                <p className="mt-3 text-lg text-slate-200">
                  클라우드 인프라 설계, DevOps 자동화, AI 활용 경험을 함께 담은 포트폴리오
                </p>
                <p className="mt-5 text-sm leading-7 text-slate-300">{about.intro.kr}</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">{about.desc.kr}</p>
              </div>

              <div className="min-w-[240px] rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="text-sm font-semibold text-white">핵심 키워드</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-200">
                  <li>AWS와 Kubernetes 기반 인프라 설계</li>
                  <li>GitOps 기반 CI/CD 자동화</li>
                  <li>모니터링과 운영 안정성 개선</li>
                  <li>서비스 구조와 배포 흐름을 함께 보는 엔지니어링</li>
                </ul>
              </div>
            </div>
          </header>

          <div className="mt-6 grid gap-6 md:grid-cols-[1.25fr_0.75fr]">
            <section className="pdf-avoid-break rounded-[24px] border border-slate-200 bg-white px-7 py-6 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
              <SectionTitle
                eyebrow="Summary"
                title="핵심 역량"
                description="현재 포트폴리오의 주요 기술 스택과 실무 준비 방향을 한 번에 읽히도록 정리했습니다."
              />
              <div className="grid gap-4">
                {capabilityGroups.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-2xl bg-slate-50 px-5 py-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-base font-semibold text-slate-900">{group.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {getSkillNames(group.sourceTitles).join(" · ")}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <aside className="pdf-avoid-break rounded-[24px] border border-slate-200 bg-white px-7 py-6 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
              <SectionTitle
                eyebrow="Contact"
                title="연락처"
                description="면접 제안, 협업, 추가 자료 요청 시 바로 연결 가능한 채널입니다."
              />
              <div className="space-y-3">
                {contacts.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-2xl border border-slate-200 px-4 py-3 transition hover:border-sky-400"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      {contact.label}
                    </p>
                    <p className="mt-1 text-sm font-medium break-all text-slate-900">
                      {contact.value}
                    </p>
                  </a>
                ))}
              </div>
            </aside>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <section className="pdf-avoid-break rounded-[24px] border border-slate-200 bg-white px-7 py-6 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
              <SectionTitle eyebrow="Education" title="교육 이력" />
              <div className="space-y-5">
                {education.map((item) => (
                  <article
                    key={`${item.title.kr}-${item.date.kr}`}
                    className="border-l-2 border-sky-500 pl-4"
                  >
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold text-slate-900">{item.title.kr}</h3>
                      <p className="text-sm text-slate-600">{item.org.kr}</p>
                      <p className="text-sm font-medium text-sky-700">{item.date.kr}</p>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                      {item.items.kr.map((detail) => (
                        <li key={detail} className="pl-4 relative before:absolute before:left-0 before:text-sky-600 before:content-['•']">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="pdf-avoid-break rounded-[24px] border border-slate-200 bg-white px-7 py-6 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
              <SectionTitle eyebrow="Certifications" title="자격 및 어학" />
              <div className="space-y-5">
                <div>
                  <p className="text-sm font-semibold text-slate-900">취득 완료</p>
                  <div className="mt-3 space-y-3">
                    {acquiredCertifications.map((certification) => (
                      <div
                        key={certification.name.kr}
                        className="rounded-2xl bg-slate-50 px-4 py-3"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-sm font-semibold text-slate-900">
                            {certification.name.kr}
                          </p>
                          <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-800">
                            {certification.score}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-slate-600">{certification.status.kr}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">준비 중</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {preparingCertifications.map((certification) => (
                      <span
                        key={certification.name.kr}
                        className="rounded-full border border-slate-300 px-3 py-2 text-sm text-slate-700"
                      >
                        {certification.name.kr}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="pdf-sheet">
          <SectionTitle
            eyebrow="Projects"
            title="대표 프로젝트"
            description="팀 프로젝트와 개인 프로젝트에서 맡은 역할, 구현 내용, 사용 기술을 중심으로 정리했습니다."
          />

          <div className="grid gap-5">
            {selectedProjects.map((project) => (
              <article
                key={project.id}
                className="pdf-avoid-break rounded-[28px] border border-slate-200 bg-white px-7 py-6 shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          project.status === "running"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {project.status === "running" ? "진행 중" : "완료"}
                      </span>
                      <span className="text-sm font-medium text-slate-500">{project.period}</span>
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                      {project.name.kr}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{project.desc.kr}</p>
                    {project.role ? (
                      <p className="mt-2 text-sm font-medium text-sky-700">{project.role.kr}</p>
                    ) : null}
                  </div>

                  <div className="flex flex-wrap gap-2 text-sm">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-slate-300 px-3 py-2 font-medium text-slate-700"
                      >
                        링크 열기
                      </a>
                    ) : null}
                    {project.presentation ? (
                      <a
                        href={project.presentation}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-slate-300 px-3 py-2 font-medium text-slate-700"
                      >
                        발표자료
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="mt-5 grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">주요 내용</p>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                      {project.highlights.map((item) => (
                        <li
                          key={item}
                          className="relative pl-4 before:absolute before:left-0 before:text-sky-600 before:content-['•']"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900">기술 스택</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <footer className="pdf-avoid-break mt-6 rounded-[24px] bg-slate-950 px-7 py-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Notes
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              이 PDF는 제출용 요약본입니다. 웹 버전 포트폴리오에는 다국어 지원, 반응형
              UI, 프로젝트 상세 구성 등 더 많은 정보가 정리되어 있습니다.
            </p>
            <div className="mt-4 grid gap-2 text-sm text-slate-300">
              <p>Email: minseoklee0323@gmail.com</p>
              <p>GitHub: https://github.com/mlee0323</p>
              <p>Blog: https://mlee0323.github.io/</p>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}
