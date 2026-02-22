{{- define "react-app.name" -}}
{{- .Chart.Name -}}
{{- end -}}

{{- define "react-app.fullname" -}}
{{- printf "%s" (include "react-app.name" .) -}}
{{- end -}}
