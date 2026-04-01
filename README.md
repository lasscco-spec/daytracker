# DayTracker PWA - 아이폰 설치 가이드

## 📁 파일 구성
- `index.html` — 앱 전체 (HTML + CSS + JS 한 파일)
- `manifest.json` — PWA 설정
- `sw.js` — 오프라인 지원 (서비스 워커)

---

## 🚀 아이폰에 설치하는 방법

### 방법 1: GitHub Pages (무료, 추천 ⭐)

1. **GitHub 계정 만들기** → https://github.com
2. **New repository** 클릭
3. Repository name: `daytracker`
4. Public 선택 후 **Create repository**
5. 세 파일(`index.html`, `manifest.json`, `sw.js`) 업로드
6. **Settings** → **Pages** → Source: `main` 브랜치 선택 → Save
7. 잠시 후 `https://[내아이디].github.io/daytracker` 접속 가능

### 방법 2: Netlify (드래그 앤 드롭, 가장 쉬움)

1. https://netlify.com 접속
2. 로그인 후 **"Deploy manually"** 영역에
3. 파일 3개 들어있는 폴더를 **드래그 앤 드롭**
4. 자동으로 URL 생성됨 (예: `https://amazing-app-123.netlify.app`)

### 방법 3: Vercel

1. https://vercel.com 접속
2. GitHub 연동 후 레포 선택하면 자동 배포

---

## 📱 아이폰 홈화면에 추가

배포 URL이 생기면:

1. 아이폰 **Safari**로 URL 접속
2. 하단 공유 버튼(□↑) 탭
3. **"홈 화면에 추가"** 선택
4. **추가** 탭

→ 앱 아이콘이 홈화면에 생기고, 앱처럼 전체화면으로 실행돼요! 🎉

---

## ✨ 기능 목록

| 탭 | 기능 |
|---|---|
| ☀️ 오늘 | 기상 기록, 활동 시작/종료, 식사 사진, 공백 채우기 |
| ⏰ 타임라인 | 24시간 원형 차트, 날짜 선택 |
| 📷 식사 | 사진 갤러리 |
| 📊 통계 | 도넛 차트, 바 차트, 인사이트 (오늘/주/월) |
| 📅 기록 | 날짜별 히스토리 |

## 💾 데이터 저장
- 브라우저 `localStorage` 사용 (폰에 저장)
- 앱 삭제(사파리 데이터 지우기) 시 삭제됨
- 오프라인에서도 사용 가능 (서비스 워커)
