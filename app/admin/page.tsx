"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  FileText,
  Calendar,
  Search,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { MarkdownEditor } from "@/components/markdown-editor";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  status: "draft" | "published";
  createdAt: string;
  updatedAt: string;
  readTime: number;
  views: number;
  featuredImage?: string;
}

export default function AdminPanel() {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: "1",
      title: "Por que o Brás é o Paraíso das Compras em São Paulo?",
      slug: "compras-bras-sao-paulo",
      excerpt:
        "Descubra por que milhares de pessoas viajam todo domingo para o maior centro comercial popular do Brasil.",
      content: `# Por que o Brás é o Paraíso das Compras em São Paulo?

O Brás, localizado no centro de São Paulo, é muito mais do que um simples bairro comercial. É o **maior centro de compras populares do Brasil**, onde milhares de empreendedores, lojistas e consumidores finais encontram produtos com preços imbatíveis e variedade incomparável.

## As Principais Vantagens

### 1. Preços até 70% menores
Compre direto do atacado com preços que não encontra em lugar nenhum.

### 2. Variedade incomparável
Milhares de lojas especializadas em todos os segmentos imagináveis.

### 3. Produtos exclusivos
Encontre itens únicos e lançamentos que ainda não chegaram ao interior.

## Como Chegar ao Brás

Uma das maiores preocupações de quem quer aproveitar as oportunidades do Brás é **como chegar lá de forma segura e econômica**. 

> **Dica:** Existe uma organizadora de viagens experiente que leva grupos toda semana para o Brás. O atendimento é personalizado e ela conhece os melhores horários e locais.`,
      category: "guia",
      tags: ["compras", "são paulo", "brás", "viagem"],
      status: "published",
      createdAt: "2025-01-15",
      updatedAt: "2025-01-15",
      readTime: 8,
      views: 2847,
      featuredImage: "/placeholder.svg?height=400&width=800",
    },
    {
      id: "2",
      title: "Goiânia: O Que Fazer na Capital Goiana",
      slug: "goiania-capital-goiana",
      excerpt:
        "Descubra as principais atrações, pontos turísticos e oportunidades de negócio na moderna capital de Goiás.",
      content: `# Goiânia: Compras no Mega Moda Park

Goiânia é um dos principais destinos de compras do Brasil, e o Shopping Mega Moda Park é um verdadeiro paraíso para lojistas e compradores em busca das últimas tendências da moda.

## Sobre o Shopping

- **Localização Privilegiada**: No coração do polo da moda de Goiânia
- **Variedade Incomparável**: Centenas de lojas com as últimas tendências
- **Preços Competitivos**: Direto dos fabricantes para você

## Como Chegar

**Toda sexta-feira** organizamos viagens saindo de Araguari às 23:30, direto para o Shopping Mega Moda Park em Goiânia. Uma oportunidade imperdível para fazer excelentes compras!`,
      category: "destino",
      tags: ["goiânia", "turismo", "capital"],
      status: "draft",
      createdAt: "2025-01-10",
      updatedAt: "2025-01-12",
      readTime: 5,
      views: 0,
    },
  ]);

  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const categories = ["guia", "destino", "dicas", "negócios"];
  const statuses = ["draft", "published"];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "all" || post.category === filterCategory;
    const matchesStatus =
      filterStatus === "all" || post.status === filterStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleSavePost = (updatedPost: BlogPost) => {
    if (selectedPost) {
      setPosts(
        posts.map((post) =>
          post.id === selectedPost.id
            ? {
                ...updatedPost,
                updatedAt: new Date().toISOString().split("T")[0],
              }
            : post,
        ),
      );
    } else {
      const newPost: BlogPost = {
        ...updatedPost,
        id: Date.now().toString(),
        createdAt: new Date().toISOString().split("T")[0],
        updatedAt: new Date().toISOString().split("T")[0],
        views: 0,
      };
      setPosts([newPost, ...posts]);
    }
    setSelectedPost(null);
    setIsEditing(false);
  };

  const handleDeletePost = (postId: string) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const handleNewPost = () => {
    setSelectedPost(null);
    setIsEditing(true);
  };

  const handleEditPost = (post: BlogPost) => {
    setSelectedPost(post);
    setIsEditing(true);
  };

  if (isEditing) {
    return (
      <MarkdownEditor
        post={selectedPost}
        onSave={handleSavePost}
        onCancel={() => {
          setIsEditing(false);
          setSelectedPost(null);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar ao Site
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Painel Administrativo
                </h1>
                <p className="text-sm text-gray-600">Gerenciar posts do blog</p>
              </div>
            </div>
            <Button
              onClick={handleNewPost}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Novo Post
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Total de Posts
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {posts.length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Publicados
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {posts.filter((p) => p.status === "published").length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <Edit className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Rascunhos</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {posts.filter((p) => p.status === "draft").length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Eye className="w-6 h-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">
                    Total Views
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {posts
                      .reduce((sum, post) => sum + post.views, 0)
                      .toLocaleString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Buscar posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as categorias</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os status</SelectItem>
                  <SelectItem value="published">Publicado</SelectItem>
                  <SelectItem value="draft">Rascunho</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Posts List */}
        <Card>
          <CardHeader>
            <CardTitle>Posts do Blog</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {post.title}
                      </h3>
                      <Badge
                        variant={
                          post.status === "published" ? "default" : "secondary"
                        }
                      >
                        {post.status === "published" ? "Publicado" : "Rascunho"}
                      </Badge>
                      <Badge variant="outline">{post.category}</Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{post.excerpt}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(post.updatedAt).toLocaleDateString("pt-BR")}
                      </span>
                      <span className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {post.views} visualizações
                      </span>
                      <span>{post.readTime} min de leitura</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEditPost(post)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeletePost(post.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
