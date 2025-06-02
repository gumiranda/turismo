"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Save,
  X,
  Bold,
  Italic,
  Link,
  List,
  ListOrdered,
  Quote,
  Code,
  ImageIcon,
  Heading1,
  Heading2,
  Heading3,
  Upload,
  Download,
  FileText,
  Tag,
  Clock,
} from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  status: "draft" | "published"
  createdAt: string
  updatedAt: string
  readTime: number
  views: number
  featuredImage?: string
}

interface MarkdownEditorProps {
  post?: BlogPost | null
  onSave: (post: BlogPost) => void
  onCancel: () => void
}

export function MarkdownEditor({ post, onSave, onCancel }: MarkdownEditorProps) {
  const [formData, setFormData] = useState({
    title: post?.title || "",
    slug: post?.slug || "",
    excerpt: post?.excerpt || "",
    content: post?.content || "",
    category: post?.category || "guia",
    tags: post?.tags?.join(", ") || "",
    status: post?.status || ("draft" as "draft" | "published"),
    featuredImage: post?.featuredImage || "",
  })

  const [activeTab, setActiveTab] = useState("write")
  const [cursorPosition, setCursorPosition] = useState(0)

  const categories = ["guia", "destino", "dicas", "negócios"]

  // Auto-generate slug from title
  useEffect(() => {
    if (formData.title && !post) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim()
      setFormData((prev) => ({ ...prev, slug }))
    }
  }, [formData.title, post])

  // Calculate read time
  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200
    const words = content.split(/\s+/).length
    return Math.ceil(words / wordsPerMinute)
  }

  const insertMarkdown = (before: string, after = "") => {
    const textarea = document.getElementById("content-textarea") as HTMLTextAreaElement
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = formData.content.substring(start, end)
    const newText = before + selectedText + after

    const newContent = formData.content.substring(0, start) + newText + formData.content.substring(end)

    setFormData((prev) => ({ ...prev, content: newContent }))

    // Set cursor position after insertion
    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(start + before.length, start + before.length + selectedText.length)
    }, 0)
  }

  const toolbarButtons = [
    { icon: Heading1, action: () => insertMarkdown("# "), tooltip: "Título 1" },
    { icon: Heading2, action: () => insertMarkdown("## "), tooltip: "Título 2" },
    { icon: Heading3, action: () => insertMarkdown("### "), tooltip: "Título 3" },
    { icon: Bold, action: () => insertMarkdown("**", "**"), tooltip: "Negrito" },
    { icon: Italic, action: () => insertMarkdown("*", "*"), tooltip: "Itálico" },
    { icon: Link, action: () => insertMarkdown("[", "](url)"), tooltip: "Link" },
    { icon: List, action: () => insertMarkdown("- "), tooltip: "Lista" },
    { icon: ListOrdered, action: () => insertMarkdown("1. "), tooltip: "Lista numerada" },
    { icon: Quote, action: () => insertMarkdown("> "), tooltip: "Citação" },
    { icon: Code, action: () => insertMarkdown("`", "`"), tooltip: "Código inline" },
    { icon: ImageIcon, action: () => insertMarkdown("![alt](", ")"), tooltip: "Imagem" },
  ]

  const handleSave = () => {
    const readTime = calculateReadTime(formData.content)
    const tagsArray = formData.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag)

    const postData: BlogPost = {
      id: post?.id || "",
      title: formData.title,
      slug: formData.slug,
      excerpt: formData.excerpt,
      content: formData.content,
      category: formData.category,
      tags: tagsArray,
      status: formData.status,
      createdAt: post?.createdAt || "",
      updatedAt: post?.updatedAt || "",
      readTime,
      views: post?.views || 0,
      featuredImage: formData.featuredImage,
    }

    onSave(postData)
  }

  const handleExport = () => {
    const dataStr = JSON.stringify(formData, null, 2)
    const dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr)

    const exportFileDefaultName = `${formData.slug || "post"}.json`

    const linkElement = document.createElement("a")
    linkElement.setAttribute("href", dataUri)
    linkElement.setAttribute("download", exportFileDefaultName)
    linkElement.click()
  }

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const imported = JSON.parse(e.target?.result as string)
          setFormData(imported)
        } catch (error) {
          alert("Erro ao importar arquivo")
        }
      }
      reader.readAsText(file)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold text-gray-900">{post ? "Editar Post" : "Novo Post"}</h1>
              {formData.title && <Badge variant="outline">{formData.category}</Badge>}
            </div>
            <div className="flex items-center space-x-2">
              <input type="file" accept=".json" onChange={handleImport} className="hidden" id="import-file" />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" onClick={() => document.getElementById("import-file")?.click()}>
                      <Upload className="w-4 h-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Importar</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="sm" onClick={handleExport}>
                      <Download className="w-4 h-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Exportar</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Button variant="ghost" onClick={onCancel}>
                <X className="w-4 h-4 mr-2" />
                Cancelar
              </Button>
              <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
                <Save className="w-4 h-4 mr-2" />
                Salvar
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Configurações do Post</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select
                    value={formData.status}
                    onValueChange={(value: "draft" | "published") =>
                      setFormData((prev) => ({ ...prev, status: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Rascunho</SelectItem>
                      <SelectItem value="published">Publicado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="category">Categoria</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="tags">Tags (separadas por vírgula)</Label>
                  <Input
                    id="tags"
                    value={formData.tags}
                    onChange={(e) => setFormData((prev) => ({ ...prev, tags: e.target.value }))}
                    placeholder="viagem, dicas, são paulo"
                  />
                </div>

                <div>
                  <Label htmlFor="featuredImage">Imagem destacada (URL)</Label>
                  <Input
                    id="featuredImage"
                    value={formData.featuredImage}
                    onChange={(e) => setFormData((prev) => ({ ...prev, featuredImage: e.target.value }))}
                    placeholder="https://..."
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Estatísticas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <FileText className="w-4 h-4 mr-2" />
                  {formData.content.split(/\s+/).length} palavras
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  {calculateReadTime(formData.content)} min de leitura
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Tag className="w-4 h-4 mr-2" />
                  {formData.tags.split(",").filter((t) => t.trim()).length} tags
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Editor */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Título</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                      placeholder="Digite o título do post..."
                      className="text-lg font-semibold"
                    />
                  </div>

                  <div>
                    <Label htmlFor="slug">Slug (URL)</Label>
                    <Input
                      id="slug"
                      value={formData.slug}
                      onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))}
                      placeholder="url-do-post"
                    />
                  </div>

                  <div>
                    <Label htmlFor="excerpt">Resumo</Label>
                    <Textarea
                      id="excerpt"
                      value={formData.excerpt}
                      onChange={(e) => setFormData((prev) => ({ ...prev, excerpt: e.target.value }))}
                      placeholder="Breve descrição do post..."
                      rows={2}
                    />
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <div className="flex justify-between items-center mb-4">
                    <TabsList>
                      <TabsTrigger value="write">Escrever</TabsTrigger>
                      <TabsTrigger value="preview">Visualizar</TabsTrigger>
                    </TabsList>

                    {activeTab === "write" && (
                      <div className="flex items-center space-x-1">
                        <TooltipProvider>
                          {toolbarButtons.map((button, index) => (
                            <Tooltip key={index}>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="sm" onClick={button.action} className="h-8 w-8 p-0">
                                  <button.icon className="w-4 h-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>{button.tooltip}</TooltipContent>
                            </Tooltip>
                          ))}
                        </TooltipProvider>
                      </div>
                    )}
                  </div>

                  <TabsContent value="write" className="mt-0">
                    <Textarea
                      id="content-textarea"
                      value={formData.content}
                      onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
                      placeholder="Escreva seu post em Markdown..."
                      className="min-h-[500px] font-mono text-sm"
                      style={{ resize: "vertical" }}
                    />
                  </TabsContent>

                  <TabsContent value="preview" className="mt-0">
                    <div className="border border-gray-200 rounded-md p-6 min-h-[500px] bg-white">
                      <div className="prose prose-lg max-w-none">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {formData.content || "*Nenhum conteúdo para visualizar*"}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
