{{/*
앱 이름
*/}}
{{- define "copilot.name" -}}
{{- .Values.appName | default "copilot-app" }}
{{- end }}

{{/*
Pod 선택을 위한 라벨 (deployment와 service가 매칭하는 라벨)
*/}}
{{- define "copilot.selectorLabels" -}}
app: {{ include "copilot.name" . }}
version: {{ .Values.appVersion | default "v1" }}
{{- end }}

{{/*
공통 라벨
*/}}
{{- define "copilot.labels" -}}
{{ include "copilot.selectorLabels" . }}
helm.sh/chart: {{ .Chart.Name }}-{{ .Chart.Version }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}