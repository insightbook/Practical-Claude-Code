# Dev Containers 확장 기능 설치 방법

Dev Containers는 Visual Studio Code의 확장 기능으로, Docker 컨테이너에서 개발 환경을 구축하고 실행할 수 있습니다. 이 책의 실습에서는 이 확장 기능을 사용하여 개발 환경을 구축합니다.

## 전제 조건

Dev Containers를 사용하려면 다음 도구가 설치되어 있어야 합니다.

- [Visual Studio Code](install-vscode.md)
- [Docker](install-docker.md)

## 설치 절차

1. Visual Studio Code를 실행합니다.
2. 왼쪽 사이드바에서 확장 기능 아이콘(사각형 4개가 나열된 아이콘)을 클릭합니다.
   - 또는 `Ctrl + Shift + X`(macOS는 `Cmd + Shift + X`)를 누릅니다.
3. 검색창에 Dev Containers를 입력합니다.
4. Dev Containers(Microsoft 제공)를 선택합니다.
5. 설치(Install) 버튼을 클릭합니다.

## Dev Container로 개발 환경 열기

실습용 저장소를 Dev Container로 열려면 다음 절차를 따릅니다.

1. 저장소를 클론합니다.

```bash
git clone https://github.com/GenerativeAgents/claude-code-book-template.git
```

2. Visual Studio Code로 저장소를 엽니다.

```bash
cd claude-code-book-template
code .
```

3. Visual Studio Code가 저장소의 `.devcontainer/devcontainer.json`을 감지하면 'Reopen in Container(컨테이너에서 다시 열기)' 알림이 나타납니다.
4. 알림을 클릭하거나 명령어 팔레트에서 Dev Containers: Reopen in Container를 실행합니다.
5. 처음 실행하면 컨테이너 빌드에 시간이 걸립니다. 완료되면 컨테이너 내의 개발 환경에서 Visual Studio Code가 열립니다.

## 문제 해결

### Docker가 실행 중이지 않은 경우

"Cannot connect to the Docker daemon" 오류 메시지가 표시되는 경우, Docker Desktop이 실행 중인지 확인합니다.

### 컨테이너 빌드에 실패하는 경우

1. Docker Desktop에 충분한 리소스(메모리, CPU)가 할당되어 있는지 확인합니다.
2. 명령어 팔레트에서 Dev Containers: Rebuild Container를 실행하여 다시 빌드를 시도합니다.

## 참고 링크

- [Dev Containers 확장 기능 (Visual Studio Marketplace)](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- [Dev Containers 공식 문서](https://code.visualstudio.com/docs/devcontainers/containers)
