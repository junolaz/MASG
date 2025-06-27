import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Shield, 
  Flame, 
  Camera, 
  Zap, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  CheckCircle,
  Users,
  Award,
  Settings,
  Eye,
  Wrench,
  Building,
  Factory,
  Store,
  Menu,
  X
} from 'lucide-react'
import logoMasg from './assets/logo-masg.png'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    descricao: '',
    servico: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      servico: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui seria implementada a lógica de envio do formulário
    alert('Orçamento solicitado! Entraremos em contato em breve.')
  }

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={logoMasg} alt="MASG Sistemas" className="h-12 w-auto" />
              <div>
                <h1 className="text-xl font-bold text-red-700">MASG Sistemas</h1>
                <p className="text-sm text-gray-600">Segurança e eficiência em cada instalação</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-red-700 transition-colors">Início</button>
              <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-red-700 transition-colors">Quem Somos</button>
              <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-red-700 transition-colors">Serviços</button>
              <button onClick={() => scrollToSection('clientes')} className="text-gray-700 hover:text-red-700 transition-colors">Clientes</button>
              <button onClick={() => scrollToSection('orcamento')} className="text-gray-700 hover:text-red-700 transition-colors">Orçamento</button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-red-700 transition-colors">Contato</button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection('inicio')} className="text-left text-gray-700 hover:text-red-700 transition-colors py-2">Início</button>
                <button onClick={() => scrollToSection('sobre')} className="text-left text-gray-700 hover:text-red-700 transition-colors py-2">Quem Somos</button>
                <button onClick={() => scrollToSection('servicos')} className="text-left text-gray-700 hover:text-red-700 transition-colors py-2">Serviços</button>
                <button onClick={() => scrollToSection('clientes')} className="text-left text-gray-700 hover:text-red-700 transition-colors py-2">Clientes</button>
                <button onClick={() => scrollToSection('orcamento')} className="text-left text-gray-700 hover:text-red-700 transition-colors py-2">Orçamento</button>
                <button onClick={() => scrollToSection('contato')} className="text-left text-gray-700 hover:text-red-700 transition-colors py-2">Contato</button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-gradient-to-br from-red-700 to-red-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <img src={logoMasg} alt="MASG Sistemas" className="h-24 w-auto mx-auto mb-8" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Soluções completas em segurança e proteção
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              Para empresas, indústrias e comércios
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-red-700 hover:bg-gray-100 text-lg px-8 py-3"
                onClick={() => scrollToSection('contato')}
              >
                <Phone className="mr-2 h-5 w-5" />
                Contato Rápido
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-red-700 text-lg px-8 py-3"
                onClick={() => scrollToSection('orcamento')}
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Quem Somos</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A MASG Sistemas é especializada em instalações elétricas, segurança eletrônica (CFTV, alarmes), 
                cabeamento estruturado e sistemas de combate a incêndio. Atuamos com equipes técnicas experientes 
                e soluções personalizadas, conforme normas nacionais e internacionais (NBR, NFPA, FM, CBMESP).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <Award className="h-12 w-12 text-red-700 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900">Certificações</h3>
                  <p className="text-sm text-gray-600">NBR, NFPA, FM, CBMESP</p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 text-red-700 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900">Equipe Experiente</h3>
                  <p className="text-sm text-gray-600">Técnicos especializados</p>
                </div>
                <div className="text-center">
                  <Settings className="h-12 w-12 text-red-700 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900">Soluções Personalizadas</h3>
                  <p className="text-sm text-gray-600">Atendimento sob medida</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Serviços */}
      <section id="servicos" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Zap className="h-12 w-12 text-red-700 mx-auto mb-4" />
                <CardTitle className="text-red-700">Instalações Elétricas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Baixa tensão para aplicações comerciais, industriais e residenciais
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Eye className="h-12 w-12 text-red-700 mx-auto mb-4" />
                <CardTitle className="text-red-700">Segurança Eletrônica</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  CFTV, alarmes de intrusão, sensores e monitoramento via app
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Flame className="h-12 w-12 text-red-700 mx-auto mb-4" />
                <CardTitle className="text-red-700">Combate a Incêndio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Sprinklers, hidrantes, alarmes, FM-200, CO2
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Wrench className="h-12 w-12 text-red-700 mx-auto mb-4" />
                <CardTitle className="text-red-700">Manutenção</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Preventiva e corretiva com emissão de ART
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clientes Atendidos */}
      <section id="clientes" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">Clientes Atendidos</h2>
          <p className="text-center text-xl text-gray-600 mb-12">Clientes que confiam na nossa proteção</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Building className="h-16 w-16 text-red-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ambev</h3>
              <p className="text-gray-600">Sistemas de segurança industrial</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Shield className="h-16 w-16 text-red-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hospital São Lucas</h3>
              <p className="text-gray-600">Proteção contra incêndio</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Store className="h-16 w-16 text-red-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rede Atacadista</h3>
              <p className="text-gray-600">CFTV e monitoramento</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solicite um Orçamento */}
      <section id="orcamento" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">Solicite um Orçamento</h2>
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="servico" className="block text-sm font-medium text-gray-700 mb-2">Tipo de Serviço</label>
                    <Select onValueChange={handleSelectChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o serviço desejado" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="instalacoes-eletricas">Instalações Elétricas</SelectItem>
                        <SelectItem value="seguranca-eletronica">Segurança Eletrônica</SelectItem>
                        <SelectItem value="combate-incendio">Combate a Incêndio</SelectItem>
                        <SelectItem value="manutencao">Manutenção</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-2">Descrição da Necessidade</label>
                    <Textarea
                      id="descricao"
                      name="descricao"
                      rows={4}
                      required
                      value={formData.descricao}
                      onChange={handleInputChange}
                      placeholder="Descreva detalhadamente sua necessidade..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-red-700 hover:bg-red-800 text-lg py-3">
                    Gerar Relatório de Orçamento
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fale Conosco */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Fale Conosco</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Marco Antonio S. Galiassi</CardTitle>
                <CardDescription>Técnico Comercial (Fire)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-red-700" />
                  <span>(11) 98109-3277</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-red-700" />
                  <span>marco@masg.com.br</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Rodrigo R. de Lima</CardTitle>
                <CardDescription>Técnico Comercial (CFTV/Intrusão)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-red-700" />
                  <span>(11) 94856-8061</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-red-700" />
                  <span>rodrigo@masg.com.br</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src={logoMasg} alt="MASG Sistemas" className="h-16 w-auto mb-4" />
              <p className="text-gray-300">
                Segurança e eficiência em cada instalação
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Instalações Elétricas</li>
                <li>Segurança Eletrônica</li>
                <li>Combate a Incêndio</li>
                <li>Manutenção</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-gray-300">
                <p>Marco: (11) 98109-3277</p>
                <p>Rodrigo: (11) 94856-8061</p>
                <p>marco@masg.com.br</p>
                <p>rodrigo@masg.com.br</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MASG Sistemas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/5511981093277"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  )
}

export default App

