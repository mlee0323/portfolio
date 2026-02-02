# DevOps Engineer Portfolio

A responsive, multi-language portfolio website built with Next.js and Tailwind CSS.
Designed for high performance and easy deployment to AWS S3 & CloudFront.

[🇰🇷 한국어 설명 보러가기](#devops-엔지니어-포트폴리오)

## 🚀 Key Features

*   **Next.js 16 (App Router)**: Utilizing server components and static export (`output: 'export'`) for S3 hosting.
*   **Tailwind CSS 4**: Modern, utility-first styling with a responsive grid layout.
*   **Internationalization (i18n)**: Full support for English and Korean routing and content.
*   **Dark/Light Mode**: Automatic system preference detection and manual toggle switch.
*   **Responsive Design**: Mobile-friendly interface optimized for all device sizes.
*   **Data-Driven Content**: Projects, skills, and resume details managed via strictly structured JavaScript objects in `src/lib/data` for easy maintenance.
*   **Automated Deployment**: Included `deploy.sh` script for building, syncing to S3, and invalidating CloudFront cache.

## 🛠 Tech Stack

*   **Framework**: Next.js 16.1.6
*   **Styling**: Tailwind CSS 4
*   **Language**: JavaScript / React 19
*   **Infrastructure**: AWS S3 (Storage), CloudFront (CDN), Route53 (DNS), ACM (SSL)
*   **CI/CD**: Shell script automation using AWS CLI

## 📦 Getting Started

### Prerequisites

*   Node.js 18.17.0 or later
*   npm or yarn

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Build (Static Export)

```bash
npm run build
```

The static output will be generated in the `out/` directory, ready to be hosted on any static site hosting service.


---

# DevOps 엔지니어 포트폴리오

Next.js와 Tailwind CSS로 제작된 반응형 다국어 포트폴리오 웹사이트입니다.
고성능과 AWS S3 & CloudFront로의 쉬운 배포를 최우선으로 설계되었습니다.

## 🚀 주요 기능

*   **Next.js 16 (App Router)**: 서버 컴포넌트 및 S3 호스팅을 위한 정적 내보내기(`output: 'export'`) 활용.
*   **Tailwind CSS 4**: 최신 유틸리티 중심 스타일링 및 반응형 그리드 레이아웃 적용.
*   **다국어 지원 (i18n)**: URL 경로 기반(`/[locale]/...`)의 완벽한 한국어/영어 라우팅 지원.
*   **다크/라이트 모드**: 시스템 설정 자동 감지 및 헤더의 토글 버튼을 통한 수동 전환.
*   **반응형 디자인**: 모든 디바이스 크기에 최적화된 모바일 친화적 인터페이스.
*   **데이터 중심 설계**: 프로젝트, 기술 스택, 자격증 등 모든 콘텐츠를 `src/lib/data` 내부의 JS 파일로 분리하여 유지보수 용이.
*   **배포 자동화**: 빌드, S3 업로드, CloudFront 캐시 무효화를 한 번에 처리하는 `deploy.sh` 스크립트 포함.

## 🛠 기술 스택

*   **프레임워크**: Next.js 16.1.6
*   **스타일링**: Tailwind CSS 4
*   **언어**: JavaScript / React 19
*   **인프라**: AWS S3 (스토리지), CloudFront (CDN), Route53 (DNS), ACM (SSL)
*   **CI/CD**: AWS CLI를 활용한 쉘 스크립트 자동화

## 📦 시작하기

### 필수 요구사항

*   Node.js 18.17.0 이상
*   npm 또는 yarn

### 설치

```bash
npm install
```

### 로컬 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하세요.

### 빌드 (정적 내보내기)

```bash
npm run build
```

빌드 결과물은 `out/` 디렉토리에 생성되며, S3를 포함한 모든 정적 웹 호스팅 서비스에 배포할 수 있습니다.


