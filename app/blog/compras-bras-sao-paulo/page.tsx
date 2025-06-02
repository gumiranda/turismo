"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Clock,
  ShoppingBag,
  DollarSign,
  Star,
  ArrowLeft,
  MessageCircle,
  CheckCircle,
  TrendingUp,
  Package,
  Truck,
  Calendar,
  ArrowRight,
  Heart,
  Eye,
  Share2,
  Bookmark,
  Target,
  ThumbsUp,
  AlertCircle,
  ShoppingCart,
  CreditCard,
  Home,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function ComprasBrasArticle() {
  const [isBookmarked, setIsBookmarked] = useState(false)

  const whatsappNumber = "5534988887777"
  const whatsappMessage =
    "Olá Eliane! Li o artigo sobre compras no Brás e gostaria de informações sobre a viagem de domingo!"

  const tips = [
    {
      icon: Clock,
      title: "Chegue Cedo",
      description: "As melhores oportunidades estão disponíveis logo pela manhã",
    },
    {
      icon: CreditCard,
      title: "Leve Dinheiro",
      description: "Muitas lojas oferecem descontos extras para pagamento à vista",
    },
    {
      icon: Package,
      title: "Planeje as Compras",
      description: "Faça uma lista prévia dos itens que precisa para otimizar o tempo",
    },
    {
      icon: ShoppingCart,
      title: "Compare Preços",
      description: "Visite algumas lojas antes de fechar negócio para garantir o melhor preço",
    },
  ]

  const advantages = [
    {
      title: "Preços até 70% menores",
      description: "Compre direto do atacado com preços que não encontra em lugar nenhum",
      icon: DollarSign,
      color: "green",
    },
    {
      title: "Variedade incomparável",
      description: "Milhares de lojas especializadas em todos os segmentos imagináveis",
      icon: Package,
      color: "blue",
    },
    {
      title: "Produtos exclusivos",
      description: "Encontre itens únicos e lançamentos que ainda não chegaram ao interior",
      icon: Star,
      color: "purple",
    },
    {
      title: "Compra em grande quantidade",
      description: "Ideal para lojistas e empreendedores que querem revender",
      icon: TrendingUp,
      color: "orange",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-blue-600">Eliane Turismo</span>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={isBookmarked ? "text-blue-600" : "text-gray-500"}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-current" : ""}`} />
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Article Header */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Guia Completo
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Por que o Brás é o <span className="text-blue-600">Paraíso das Compras</span> em São Paulo?
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Descubra por que milhares de pessoas viajam todo domingo para o maior centro comercial popular do Brasil e
              como você pode aproveitar ao máximo essa experiência única.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Publicado em 15 de Janeiro, 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>8 min de leitura</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4" />
                <span>2.847 visualizações</span>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Centro comercial do Brás em São Paulo"
                width={800}
                height={400}
                className="rounded-2xl shadow-2xl mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                O Brás, localizado no centro de São Paulo, é muito mais do que um simples bairro comercial. É o{" "}
                <strong>maior centro de compras populares do Brasil</strong>, onde milhares de empreendedores, lojistas
                e consumidores finais encontram produtos com preços imbatíveis e variedade incomparável.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Se você ainda não conhece esse universo de oportunidades, prepare-se para descobrir por que{" "}
                <strong>todo domingo</strong> centenas de pessoas fazem a viagem até lá e voltam com sacolas cheias de
                produtos que custaram uma fração do preço praticado no varejo tradicional.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">3.000+</div>
                <div className="text-sm text-gray-600">Lojas no Brás</div>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">70%</div>
                <div className="text-sm text-gray-600">Economia média</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-xl">
                <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">50mil</div>
                <div className="text-sm text-gray-600">Visitantes/dia</div>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-2">24h</div>
                <div className="text-sm text-gray-600">Funcionamento</div>
              </div>
            </div>

            {/* Main Advantages */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                As Principais Vantagens de Comprar no Brás
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {advantages.map((advantage, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            advantage.color === "green"
                              ? "bg-green-100"
                              : advantage.color === "blue"
                                ? "bg-blue-100"
                                : advantage.color === "purple"
                                  ? "bg-purple-100"
                                  : "bg-orange-100"
                          }`}
                        >
                          <advantage.icon
                            className={`w-6 h-6 ${
                              advantage.color === "green"
                                ? "text-green-600"
                                : advantage.color === "blue"
                                  ? "text-blue-600"
                                  : advantage.color === "purple"
                                    ? "text-purple-600"
                                    : "text-orange-600"
                            }`}
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Detailed Content */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">O Que Torna o Brás Tão Especial?</h2>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-blue-600" />
                  1. Concentração Única de Fornecedores
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  O Brás concentra em poucos quarteirões o que você levaria semanas para encontrar espalhado pela
                  cidade. São <strong>mais de 3.000 lojas especializadas</strong> em roupas, acessórios, calçados,
                  produtos para casa, eletrônicos e muito mais. Essa concentração permite que você compare preços,
                  qualidade e variedade sem perder tempo se deslocando.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                  2. Preços Direto da Fábrica
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Muitas lojas do Brás são <strong>pontos de venda diretos dos fabricantes</strong>. Isso significa que
                  você está comprando sem os intermediários que encarecem os produtos no varejo tradicional. É comum
                  encontrar peças de roupa por R$ 10-15 que custam R$ 50-80 em lojas convencionais.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Package className="w-5 h-5 mr-2 text-purple-600" />
                  3. Variedade Para Todos os Gostos e Bolsos
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Desde produtos básicos até itens de marca e alta qualidade, o Brás oferece opções para todos os perfis
                  de consumidor. Você encontra desde{" "}
                  <strong>roupas básicas por preços populares até peças de grife com descontos significativos</strong>.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-orange-600" />
                  4. Oportunidade de Negócio
                </h3>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Para empreendedores e lojistas, o Brás é uma <strong>mina de ouro</strong>. Você pode comprar produtos
                  para revenda com margens de lucro muito atrativas. Muitos pequenos empresários do interior fazem
                  viagens regulares ao Brás para abastecer seus negócios.
                </p>
              </div>
            </section>

            {/* Tips Section */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                Dicas Essenciais Para Sua Primeira Viagem
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {tips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <tip.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                      <p className="text-gray-600 text-sm">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Transportation Section - Subtle Eliane Promotion */}
            <section className="mb-12">
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Truck className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      Como Chegar ao Brás de Forma Prática?
                    </h2>
                  </div>

                  <div className="prose prose-lg max-w-none text-center">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Uma das maiores preocupações de quem quer aproveitar as oportunidades do Brás é{" "}
                      <strong>como chegar lá de forma segura e econômica</strong>. Dirigir até São Paulo pode ser
                      estressante, caro (combustível + estacionamento) e arriscado.
                    </p>

                    <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-green-600" />A Solução Ideal: Viagem Organizada
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Muitas pessoas da região de Araguari já descobriram a forma mais inteligente de aproveitar o
                        Brás: <strong>viagens organizadas que saem todo domingo</strong> direto para o coração comercial
                        de São Paulo.
                      </p>

                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>Sem stress de trânsito</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>Economia no transporte</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>Viagem segura e confortável</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-600 text-white rounded-xl p-6">
                      <h4 className="font-semibold mb-2">💡 Dica Especial</h4>
                      <p className="text-blue-100 text-sm mb-4">
                        Existe uma organizadora de viagens experiente que leva grupos toda semana para o Brás. O
                        atendimento é personalizado e ela conhece os melhores horários e locais para otimizar suas
                        compras.
                      </p>
                      <Link
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-white text-blue-600 hover:bg-blue-50">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Saber Mais Sobre as Viagens
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* What to Expect */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                O Que Esperar da Sua Primeira Visita
              </h2>

              <div className="prose prose-lg max-w-none">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Prepare-se para a Multidão</h4>
                      <p className="text-yellow-700 text-sm">
                        O Brás é sempre movimentado, especialmente aos domingos. Isso é sinal de que você está no lugar
                        certo! A energia do local é contagiante e faz parte da experiência.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Sua primeira visita ao Brás será uma experiência única. Prepare-se para{" "}
                  <strong>ficar impressionado com a quantidade de opções</strong> disponíveis. É comum as pessoas
                  ficarem um pouco perdidas no início, mas isso é normal - em pouco tempo você se acostuma com a
                  dinâmica do local.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>Dica importante:</strong> Não tente ver tudo em um dia. Foque em algumas ruas ou segmentos
                  específicos para não se cansar demais. Muitas pessoas fazem viagens regulares justamente porque sempre
                  descobrem algo novo.
                </p>
              </div>
            </section>

            {/* Success Stories */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Histórias de Sucesso</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <ThumbsUp className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Maria, Empreendedora</h3>
                        <p className="text-sm text-gray-600">Araguari - MG</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic text-sm">
                      "Comecei fazendo viagens mensais ao Brás e hoje tenho uma loja de roupas próspera. O que eu compro
                      por R$ 15 lá, vendo por R$ 45 aqui. É um negócio que mudou minha vida!"
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <Heart className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">João, Aposentado</h3>
                        <p className="text-sm text-gray-600">Uberaba - MG</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic text-sm">
                      "Vou todo mês com minha esposa. Compramos roupas para a família toda gastando menos do que
                      gastaríamos em uma única peça aqui na cidade. É nosso passeio favorito!"
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Pronto Para Descobrir o Brás?</h2>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Agora que você conhece todos os benefícios e oportunidades que o Brás oferece, que tal planejar sua
                  primeira visita? Lembre-se: <strong>todo domingo</strong> há viagens organizadas saindo da região de
                  Araguari direto para lá.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Informações Sobre Viagens
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
                    >
                      <Home className="w-5 h-5 mr-2" />
                      Voltar ao Site
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Artigos Relacionados</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Dicas de viagem"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-green-600 text-white">Dicas</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Como Organizar Sua Bagagem Para Compras</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Dicas práticas para otimizar o espaço e trazer mais produtos...
                  </p>
                  <Button variant="outline" size="sm">
                    Ler Artigo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Goiânia"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-purple-600 text-white">Destino</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Goiânia: O Que Fazer na Capital Goiana</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Descubra as atrações e oportunidades de negócio em Goiânia...
                  </p>
                  <Button variant="outline" size="sm">
                    Ler Artigo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Empreendedorismo"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-orange-600 text-white">Negócios</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Como Começar um Negócio de Revenda</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Guia completo para quem quer empreender com produtos do Brás...
                  </p>
                  <Button variant="outline" size="sm">
                    Ler Artigo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">Eliane Turismo</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">Organizando viagens com segurança e conforto desde 2019</p>
            <div className="flex justify-center space-x-4">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Início
              </Link>
              <Link href="/#destinos" className="text-gray-400 hover:text-white transition-colors">
                Destinos
              </Link>
              <Link href="/#contato" className="text-gray-400 hover:text-white transition-colors">
                Contato
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <Link
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </Link>
    </div>
  )
}
