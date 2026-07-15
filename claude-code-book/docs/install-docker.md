# Docker 설치 방법

Docker는 컨테이너 기술을 이용하여 애플리케이션 개발 및 실행 환경을 구축하는 도구입니다. 이 책에서는 Dev Container를 이용하기 위해 Docker가 필요합니다.

## Docker Desktop

Windows와 macOS에서는 Docker Desktop을 설치합니다. Docker Desktop에는 Docker Engine, Docker CLI, Docker Compose 등이 포함되어 있습니다.

<https://www.docker.com/products/docker-desktop/>

※ Docker Desktop은 개인 이용, 교육 목적, 소규모 사업자의 경우 무료지만, 대기업 등의 상업적 이용에는 유료 플랜이 필요할 수 있습니다. 자세한 내용은 [Docker 공식 라이선스 정보](https://www.docker.com/pricing/)를 확인합니다.

## 설치 절차

### Windows

#### 시스템 요구 사항

자세한 내용은 공식 문서를 참고하세요.

<https://docs.docker.com/desktop/setup/install/windows-install/>

#### WSL 2 활성화

Docker Desktop은 WSL 2 백엔드를 권장합니다. WSL 2가 설정되지 않은 경우, 다음 절차로 활성화합니다.

1. PowerShell을 관리자 권한으로 실행합니다.
2. 다음 명령어를 실행합니다:

```powershell
wsl --install
```

3. PC를 재부팅합니다.

#### Docker Desktop 설치

1. [공식 사이트](https://www.docker.com/products/docker-desktop/)에서 인스톨러를 다운로드합니다.
2. 다운로드한 인스톨러를 실행합니다.
3. 설치 마법사의 지시에 따릅니다.
4. Use WSL 2 instead of Hyper-V 옵션이 선택되어 있는지 확인합니다.
5. 설치가 완료되면 PC를 재부팅합니다.
6. Docker Desktop을 실행하고 서비스 약관에 동의합니다.

### macOS

#### 시스템 요구 사항

자세한 내용은 공식 문서를 참고하세요.

<https://docs.docker.com/desktop/setup/install/mac-install/>

#### 설치 절차

1. [공식 사이트](https://www.docker.com/products/docker-desktop/)에서 인스톨러를 다운로드합니다.
2. 다운로드한 파일을 엽니다.
3. Docker 아이콘을 Applications 폴더로 드래그 앤 드롭합니다.
4. 애플리케이션 폴더에서 Docker를 실행합니다.
5. 처음 실행할 때 시스템 비밀번호 입력을 요청할 수 있습니다.
6. 서비스 약관에 동의합니다.
7. 메뉴 바에 Docker 아이콘(고래 모양)이 표시되면 실행 완료입니다.

## 설치 확인

터미널(명령 프롬프트)에서 다음 명령어를 실행하여 버전이 표시되면 설치 성공입니다.

```bash
docker --version
```

또한, 다음 명령어로 Docker가 올바르게 작동하는지 확인할 수 있습니다.

```bash
docker run hello-world
```

"Hello from Docker!" 메시지가 표시되면 Docker가 정상적으로 작동 중입니다.

## 참고 링크

- [Docker 공식 사이트](https://www.docker.com/)
- [Docker Desktop 공식 문서](https://docs.docker.com/desktop/)
