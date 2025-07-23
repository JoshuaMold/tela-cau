'use client'

import { motion } from "framer-motion"
import {
  Bell,
  Camera,
  MapPin,
  AlertTriangle,
  ShieldCheck,
} from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const MotionCard = motion(Card)

export default function Home() {
  return (
    <div className="min-h-screen w-full p-6 md:p-10">
      <MotionCard
        className="bg-white shadow-sm rounded-2xl p-6 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-[#0F172A]">
              Monitoramento Inteligente
            </h1>
            <p className="text-sm text-[#64748B]">
              Análise de Comportamento Suspeito em Estacionamentos Comerciais
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#334155]">
              Ambientes monitorados:
            </span>
            <Select>
              <SelectTrigger className="w-[200px] border border-[#CBD5E1] rounded-md bg-white">
                <SelectValue placeholder="Selecionar local" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="corredores Bloco A">Estacionamento Antônio Bezerra</SelectItem>
                <SelectItem value="corredores Bloco B">Estacionamento Godofredo Maciel</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Cameras */}
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="rounded-xl overflow-hidden border border-[#E2E8F0]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <Image
                  src={`/imagem0${i}.svg`}
                  alt={`Camera feed ${i}`}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Indicadores e Alertas */}
          <div className="space-y-6">
            {/* Indicadores */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: <Bell className="h-6 w-6 text-yellow-500" />,
                  title: "Alertas",
                  value: "4",
                },
                {
                  icon: <Camera className="h-6 w-6 text-blue-600" />,
                  title: "Câmeras online",
                  value: "24",
                },
                {
                  icon: <MapPin className="h-6 w-6 text-green-500" />,
                  title: "Áreas monitoradas",
                  value: "12",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="rounded-xl border border-[#E2E8F0] shadow-sm">
                    <CardContent className="p-5 flex justify-between items-center">
                      <div>
                        <p className="text-3xl font-bold text-[#0F172A]">
                          {item.value}
                        </p>
                        <p className="text-base text-[#64748B]">{item.title}</p>
                      </div>
                      {item.icon}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Alertas recentes com ícones distintos */}
            <div className="border border-[#E2E8F0] rounded-xl p-4 bg-[#F8FAFC]">
              <h2 className="text-lg font-semibold mb-3 text-[#0F172A]">
                Alertas recentes
              </h2>
              <div className="space-y-2">
                {[
                  {
                    text: "Objeto potencialmente perigoso detectado",
                    cor: "bg-yellow-100 text-yellow-800",
                    icon: <AlertTriangle className="w-4 h-4 mr-2 text-yellow-800" />,
                  },
                  {
                    text: "Alerta de baixa prioridade",
                    cor: "bg-green-100 text-green-800",
                    icon: <ShieldCheck className="w-4 h-4 mr-2 text-green-800" />,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`inline-flex items-center rounded-full px-3 py-2 text-sm font-medium ${item.cor}`}
                  >
                    {item.icon}
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Status + Pessoas Detectadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Status do sistema */}
          <MotionCard
            className="rounded-xl border border-[#E2E8F0]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold text-[#0F172A]">
                Status do sistema
              </h2>
              <div className="flex justify-between text-lg">
                <span>Câmeras Ativas</span>
                <span className="text-green-600 font-semibold">22/24</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Últimas 24h</span>
                <span className="text-blue-600 font-semibold">0 Incidentes</span>
              </div>
              <div className="flex justify-between text-lg">
                <span>Precisão da Detecção</span>
                <span className="text-purple-600 font-semibold">97,5%</span>
              </div>
            </CardContent>
          </MotionCard>

          {/* Pessoas Detectadas */}
          <MotionCard
            className="rounded-xl border border-[#E2E8F0]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-semibold text-[#0F172A]">
                Pessoas Detectadas
              </h2>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full" />
                  <div>
                    <p className="text-lg font-medium text-[#0F172A]">Desconhecido</p>
                    <p className="text-base text-[#64748B]">
                      Estacionamento Antônio Bezerra
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full" />
                  <div>
                    <p className="text-lg font-medium text-[#0F172A]">Desconhecido</p>
                    <p className="text-base text-[#64748B]">
                      Estacionamento Godofredo Maciel
                    </p>
                  </div>
                </div>
            </CardContent>
          </MotionCard>
        </div>
      </MotionCard>
    </div>
  )
}
