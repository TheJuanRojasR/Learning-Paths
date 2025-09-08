# 📝 Convenciones de Commits

Este documento establece las convenciones de commits para este repositorio de aprendizaje basadas en [Conventional Commits](https://www.conventionalcommits.org/).

## 🎯 Formato

```
<tipo>[alcance opcional]: <descripción>

[cuerpo opcional]

[pie(s) de página opcional(es)]
```

## 📋 Tipos de Commits

### Para contenido de aprendizaje:

- **`feat:`** - Nuevas clases, ejercicios, notas o funcionalidades
- **`docs:`** - Actualizaciones de README, documentación o apuntes
- **`fix:`** - Correcciones en código, ejercicios o notas
- **`refactor:`** - Reorganización de archivos o estructura
- **`style:`** - Cambios de formato que no afectan el contenido
- **`chore:`** - Tareas de mantenimiento, configuración
- **`test:`** - Adición o modificación de pruebas
- **`perf:`** - Mejoras de rendimiento en código

## 🏷️ Alcances Sugeridos

- `notes` - Para apuntes y notas
- `exercises` - Para ejercicios y prácticas  
- `resources` - Para recursos adicionales
- `config` - Para configuraciones
- `structure` - Para cambios de estructura

## ✅ Ejemplos Correctos

```bash
# Nuevas notas de clase
feat(notes): add class 5 notes on async/await

# Nuevo ejercicio
feat(exercises): add callback exercise from module 2

# Actualizar README
docs: update course progress and technologies

# Corrección de código
fix(exercises): correct syntax error in promises example

# Reorganización
refactor(structure): move code examples to separate folders

# Recursos del curso
feat(resources): add course slides and PDF materials

# Mantenimiento
chore: update .gitignore for Node.js projects
```

## 💡 Consejos

1. **Descripción breve** (máx. 50 caracteres)
2. **Usar imperativos** ("add" no "added")
3. **Minúsculas** para la descripción
5. **No usar punto final** en la descripción

## 🔄 Comandos Útiles

```bash
# Ver historial con formato bonito
git log --oneline --graph

# Buscar commits por tipo
git log --grep="feat:"

# Ver commits de un archivo específico
git log --follow --
```