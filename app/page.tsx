"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Clock,
  Shield,
  Users,
  Star,
  Phone,
  Mail,
  Facebook,
  Instagram,
  MessageCircle,
  Menu,
  X,
  CheckCircle,
  ArrowRight,
  CreditCard,
  Headphones,
  Wifi,
  Coffee,
  AirVent,
  Navigation,
  Award,
  Heart,
  Zap,
  Globe,
  ChevronDown,
  ChevronUp,
  ShoppingBag,
  Package,
  TrendingUp,
  Eye,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
export const whatsappNumber = "5534992369984"; // Novo número - atualizado recentemente!

export default function ElianeturismoLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Empresária",
      content:
        "A Eliane é incrível! Sempre organiza as viagens com muito cuidado. Já viajei várias vezes para São Paulo e o atendimento pelo WhatsApp é super rápido e eficiente.",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "João Santos",
      role: "Aposentado",
      content:
        "Viajo para Monte Sião todo ano e sempre chamo a Eliane. Ela conhece os melhores horários e sempre consegue um preço justo. Recomendo de olhos fechados!",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Ana Costa",
      role: "Professora",
      content:
        "Organização perfeita! A Eliane cuida de todos os detalhes da viagem. Desde a reserva até o embarque, tudo funciona perfeitamente. Muito profissional!",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ];

  const faqs = [
    {
      question: "Como faço para reservar uma passagem?",
      answer:
        "É muito simples! Basta chamar a Eliane no WhatsApp. Ela vai te ajudar com horários, destinos e fazer sua reserva na hora.",
    },
    {
      question: "Quais são os destinos disponíveis?",
      answer:
        "Organizamos viagens para Monte Sião, São Paulo (Brás), Goiânia e outros destinos. Saindo de Araguari com paradas em Uberaba, Uberlândia e Ribeirão Preto.",
    },
    {
      question: "Os ônibus são confortáveis?",
      answer:
        "Sim! Trabalhamos apenas com ônibus modernos, ar condicionado, poltronas reclináveis e todos os equipamentos de segurança.",
    },
    {
      question: "Posso cancelar minha viagem?",
      answer:
        "Sim, entre em contato com a Eliane pelo WhatsApp para verificar as condições de cancelamento de acordo com a antecedência.",
    },
  ];

  const whatsappMessage =
    "Olá Eliane! Vi seu site e gostaria de informações sobre as viagens. É o novo número mesmo?";

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Eliane Turismo
                </span>
                <p className="text-xs text-gray-500 hidden md:block">
                  Organizadora de Viagens
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="#destinos"
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium relative group"
              >
                Destinos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#servicos"
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium relative group"
              >
                Serviços
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#depoimentos"
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium relative group"
              >
                Depoimentos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#contato"
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium relative group"
              >
                Contato
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/blog/compras-bras-sao-paulo"
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium relative group"
              >
                Blog
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            {/* WhatsApp Button & Mobile Menu */}
            <div className="flex items-center space-x-3">
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  whatsappMessage,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </Button>
              </Link>

              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-3 pt-4">
                <Link
                  href="#destinos"
                  className="text-gray-600 hover:text-blue-600 transition-colors py-2 px-4 rounded-lg hover:bg-blue-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Destinos
                </Link>
                <Link
                  href="#servicos"
                  className="text-gray-600 hover:text-blue-600 transition-colors py-2 px-4 rounded-lg hover:bg-blue-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Serviços
                </Link>
                <Link
                  href="#depoimentos"
                  className="text-gray-600 hover:text-blue-600 transition-colors py-2 px-4 rounded-lg hover:bg-blue-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Depoimentos
                </Link>
                <Link
                  href="#contato"
                  className="text-gray-600 hover:text-blue-600 transition-colors py-2 px-4 rounded-lg hover:bg-blue-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </Link>
                <Link
                  href="/blog/compras-bras-sao-paulo"
                  className="text-gray-600 hover:text-blue-600 transition-colors py-2 px-4 rounded-lg hover:bg-blue-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20 md:pt-24 pb-16 md:pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              {/* Badge */}
              <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Organizadora Oficial de Viagens
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Viaje com a{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Eliane
                </span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-700">
                  Segurança e Conforto Garantidos
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <strong>Eliane organiza suas viagens</strong> com horários fixos
                e garantidos: <strong>São Paulo (Brás) todo domingo</strong> e{" "}
                <strong>Goiânia toda sexta-feira</strong>. Ônibus modernos,
                lugares garantidos e atendimento personalizado no nosso{" "}
                <strong>novo número do WhatsApp</strong>.
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">
                    Atendimento 24h no WhatsApp
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">
                    Ônibus com ar condicionado
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">
                    Horários flexíveis
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-700">Preços justos</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    whatsappMessage,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chamar a Eliane
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 transition-all duration-300"
                  onClick={() =>
                    document
                      .getElementById("destinos")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  Ver Destinos
                </Button>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Ônibus moderno organizado pela Eliane Turismo"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Cards */}
                <div className="absolute -bottom-4 -left-4 bg-white p-4 md:p-6 rounded-xl shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm md:text-base">
                        100% Seguro
                      </p>
                      <p className="text-xs md:text-sm text-gray-600">
                        Viagens protegidas
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-white p-3 md:p-4 rounded-xl shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-xs md:text-sm">
                        WhatsApp
                      </p>
                      <p className="text-xs text-gray-600">
                        Atendimento direto
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900">
                500+
              </div>
              <div className="text-sm md:text-base text-gray-600">
                Clientes Satisfeitos
              </div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900">
                15+
              </div>
              <div className="text-sm md:text-base text-gray-600">Destinos</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900">
                5
              </div>
              <div className="text-sm md:text-base text-gray-600">
                Anos de Experiência
              </div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900">
                98%
              </div>
              <div className="text-sm md:text-base text-gray-600">
                Recomendação
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="servicos"
        className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Diferenciais
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Por que escolher a <span className="text-blue-600">Eliane</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              A Eliane cuida de todos os detalhes da sua viagem com carinho e
              profissionalismo. Mais de 5 anos organizando viagens com
              excelência.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="group text-center p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Atendimento WhatsApp
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Fale diretamente com a Eliane pelo WhatsApp. Atendimento
                  rápido, personalizado e disponível quando você precisar.
                </p>
              </CardContent>
            </Card>

            <Card className="group text-center p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Horários Flexíveis
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Saídas regulares de Araguari com paradas em Uberaba,
                  Uberlândia e Ribeirão Preto. Horários que se adaptam à sua
                  necessidade.
                </p>
              </CardContent>
            </Card>

            <Card className="group text-center p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Viagem Segura
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ônibus modernos, motoristas experientes e seguro de viagem.
                  Sua segurança é nossa prioridade número um.
                </p>
              </CardContent>
            </Card>

            <Card className="group text-center p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Preços Justos
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Valores transparentes e competitivos. A Eliane sempre busca as
                  melhores condições para seus clientes.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Bus Features */}
          <div className="mt-16 bg-white rounded-2xl p-6 md:p-8 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
              Conforto e Comodidade nos Ônibus
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AirVent className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Ar Condicionado
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Wifi className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Wi-Fi Gratuito
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Coffee className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Poltronas Reclináveis
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Headphones className="w-6 h-6 text-orange-600" />
                </div>
                <p className="text-sm font-medium text-gray-700">
                  Entretenimento
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinos" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 px-4 py-2">
              <Globe className="w-4 h-4 mr-2" />
              Destinos Populares
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Principais <span className="text-green-600">Destinos</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Partindo de Araguari para os melhores destinos do Brasil. A Eliane
              organiza sua viagem com todo cuidado.
            </p>
          </div>

          <div className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 shadow-lg border border-blue-100">
            <h3 className="text-2xl font-bold text-center text-blue-800 mb-6">
              Horários Garantidos
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 text-blue-600 mr-2" />
                    <h4 className="text-xl font-semibold">São Paulo (Brás)</h4>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">
                    Todo Domingo
                  </Badge>
                </div>
                <p className="text-gray-600">
                  Saída de Araguari com destino ao maior centro de compras do
                  Brasil.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-600">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 text-purple-600 mr-2" />
                    <h4 className="text-xl font-semibold">
                      Goiânia (Mega Moda)
                    </h4>
                  </div>
                  <Badge className="bg-purple-100 text-purple-800">
                    Toda Sexta 23:30
                  </Badge>
                </div>
                <p className="text-gray-600">
                  Saída de Araguari direto para o Shopping Mega Moda Park.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Monte Sião - MG"
                  width={400}
                  height={250}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                  <Star className="w-3 h-3 mr-1" />
                  Popular
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                  Monte Sião - MG
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Águas termais e paisagens deslumbrantes da Serra da
                  Mantiqueira. Destino perfeito para relaxar e renovar as
                  energias.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>4h de viagem</span>
                  </div>
                  <Link
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      "Olá Eliane! Gostaria de informações sobre viagens para Monte Sião.",
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="group-hover:bg-green-600 group-hover:text-white transition-colors duration-300"
                    >
                      Consultar
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-lg">
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="São Paulo - Brás"
                  width={400}
                  height={250}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                  <Users className="w-3 h-3 mr-1" />
                  Mais Procurado
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                  São Paulo - Brás
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Todo domingo</strong> direto para o coração comercial
                  de SP! O Brás oferece as melhores oportunidades de compras com
                  preços imbatíveis.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>Domingos - 6h viagem</span>
                  </div>
                  <Link
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      "Olá Eliane! Gostaria de informações sobre viagens para São Paulo.",
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"
                    >
                      Consultar
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-lg md:col-span-2 lg:col-span-1">
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Goiânia - GO"
                  width={400}
                  height={250}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Badge className="absolute top-4 left-4 bg-purple-600 text-white">
                  <MapPin className="w-3 h-3 mr-1" />
                  Capital
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                  Goiânia - GO
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  <strong>Toda sexta-feira</strong> para a capital planejada!
                  Cidade verde, moderna e com excelente infraestrutura para
                  negócios e turismo.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>Sextas - 3h viagem</span>
                  </div>
                  <Link
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      "Olá Eliane! Gostaria de informações sobre viagens para Goiânia.",
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300"
                    >
                      Consultar
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Route Map */}
          <div className="mt-12 md:mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
              Rota das Viagens
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                <span className="font-medium text-gray-900">Araguari</span>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                <span className="font-medium text-gray-900">Uberaba</span>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                <span className="font-medium text-gray-900">Uberlândia</span>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-orange-600 rounded-full"></div>
                <span className="font-medium text-gray-900">
                  Ribeirão Preto
                </span>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" />
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                <span className="font-medium text-gray-900">Destino Final</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New WhatsApp Number Alert */}
      <section className="py-12 bg-gradient-to-r from-green-50 to-emerald-50 border-y border-green-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Zap className="w-4 h-4 mr-2" />
              ATENÇÃO: Número Atualizado!
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Novo Número do WhatsApp da Eliane
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Para melhor atendê-los, a Eliane mudou o número do WhatsApp
              recentemente.
              <strong> Salve já o novo número</strong> e continue aproveitando o
              melhor atendimento em viagens!
            </p>
            <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-500">Novo WhatsApp</p>
                  <p className="text-xl font-bold text-gray-900">
                    (34) 9 9236-9984
                  </p>
                </div>
              </div>
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  whatsappMessage,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Salvar Novo Número
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* Blog Highlights Section */}
      <section
        id="blog"
        className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-purple-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 px-4 py-2">
              <Heart className="w-4 h-4 mr-2" />
              Blog & Dicas
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Dicas e <span className="text-purple-600">Informações</span> Úteis
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Confira nossos artigos com dicas valiosas sobre destinos, compras
              e como aproveitar ao máximo suas viagens.
            </p>
          </div>

          {/* Featured Article */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-white shadow-2xl border-0 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Compras no Brás - São Paulo"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Artigo em Destaque
                  </Badge>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <Badge className="mb-4 bg-green-100 text-green-800 px-3 py-1 w-fit">
                    <ShoppingBag className="w-3 h-3 mr-1" />
                    Guia Completo
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Por que o Brás é o Paraíso das Compras em São Paulo?
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Descubra por que milhares de pessoas viajam todo domingo
                    para o maior centro comercial popular do Brasil. Preços até
                    70% menores, variedade incomparável e dicas exclusivas para
                    sua primeira visita.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>8 min</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>2.8k visualizações</span>
                      </div>
                    </div>
                    <Link href="/blog/compras-bras-sao-paulo">
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                        Ler Artigo
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Blog Articles Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  alt="Dicas de viagem para Goiânia"
                  width={350}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-purple-600 text-white">
                  <MapPin className="w-3 h-3 mr-1" />
                  Destino
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Goiânia: O Que Fazer na Capital Goiana
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Descubra as principais atrações, pontos turísticos e
                  oportunidades de negócio na moderna capital de Goiás.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>5 min</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Ler Mais
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  alt="Como organizar bagagem para compras"
                  width={350}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-green-600 text-white">
                  <Package className="w-3 h-3 mr-1" />
                  Dicas
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Como Organizar Sua Bagagem Para Compras
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Dicas práticas para otimizar o espaço, proteger suas compras e
                  trazer mais produtos na viagem de volta.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>4 min</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Ler Mais
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=350"
                  alt="Como começar um negócio de revenda"
                  width={350}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-orange-600 text-white">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Negócios
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Como Começar um Negócio de Revenda
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Guia completo para empreendedores que querem começar um
                  negócio lucrativo com produtos do Brás.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>6 min</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Ler Mais
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Quer mais dicas e informações sobre viagens?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  "Olá Eliane! Gostaria de receber dicas sobre viagens e destinos.",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar com a Eliane
                </Button>
              </Link>
              <Link href="/blog/compras-bras-sao-paulo">
                <Button
                  variant="outline"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3"
                >
                  <Star className="w-5 h-5 mr-2" />
                  Ver Todos os Artigos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800 px-4 py-2">
              <MessageCircle className="w-4 h-4 mr-2" />
              Dúvidas Frequentes
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Perguntas <span className="text-orange-600">Frequentes</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre as viagens organizadas pela Eliane. Se não
              encontrar sua resposta, chame no WhatsApp!
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <button
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? null : index)
                    }
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Não encontrou sua resposta?</p>
            <Link
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Olá Eliane! Tenho uma dúvida sobre as viagens.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3">
                <MessageCircle className="w-5 h-5 mr-2" />
                Perguntar à Eliane
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/50 to-purple-600/50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white px-4 py-2 backdrop-blur-sm">
              <Zap className="w-4 h-4 mr-2" />
              Pronto para Viajar?
            </Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Sua próxima viagem está a um{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                clique de distância
              </span>
            </h2>

            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Entre em contato com a <strong>Eliane</strong> pelo WhatsApp agora
              mesmo. Ela vai organizar sua viagem com todo carinho e
              profissionalismo que você merece.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  whatsappMessage,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chamar a Eliane Agora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 backdrop-blur-sm transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  24h
                </div>
                <div className="text-sm text-blue-100">
                  Atendimento WhatsApp
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  100%
                </div>
                <div className="text-sm text-blue-100">Seguro e Confiável</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  5+
                </div>
                <div className="text-sm text-blue-100">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  500+
                </div>
                <div className="text-sm text-blue-100">
                  Clientes Satisfeitos
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-gray-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xl md:text-2xl font-bold">
                    Eliane Turismo
                  </span>
                  <p className="text-sm text-gray-400">
                    Organizadora de Viagens
                  </p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                A Eliane organiza suas viagens de Araguari para os principais
                destinos do Brasil com segurança, conforto e o melhor
                atendimento via WhatsApp.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-600 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-600 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Destinos Populares
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    Monte Sião - MG
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    São Paulo - Brás
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    Goiânia - GO
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    Outros Destinos
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Contato Direto
              </h3>
              <div className="space-y-4">
                <Link
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-green-400 transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-green-600 transition-colors duration-300">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">WhatsApp</p>
                    <p className="text-xs">(34) 99999-9999</p>
                  </div>
                </Link>
                <div className="flex items-center text-gray-400">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Telefone</p>
                    <p className="text-xs">(34) 3333-3333</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-400">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">E-mail</p>
                    <p className="text-xs">contato@elianeturismo.com.br</p>
                  </div>
                </div>
                <div className="flex items-start text-gray-400">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center mr-3 mt-1">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Localização</p>
                    <p className="text-xs">Araguari - MG, Brasil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Eliane Turismo. Todos os
                direitos reservados.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Política de Privacidade
                </Link>
                <Link
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Termos de Uso
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <Link
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          whatsappMessage,
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-bounce"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </Link>
    </div>
  );
}
