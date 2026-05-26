export default function PainelAfiliado() { const cards = [ { titulo: 'Buscar Produtos Virais', descricao: 'Encontre automaticamente produtos com potencial de vendas.', emoji: '🔥', }, { titulo: 'Gerar Legendas IA', descricao: 'Cria textos prontos para Instagram e TikTok.', emoji: '🤖', }, { titulo: 'Criar Vídeo Automático', descricao: 'Transforma imagens em vídeos curtos virais.', emoji: '🎬', }, { titulo: 'Agendar Postagens', descricao: 'Organiza postagens automáticas diariamente.', emoji: '📅', }, ];

return ( <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-blue-900 text-white p-6"> <div className="max-w-6xl mx-auto"> <div className="text-center mb-12"> <h1 className="text-5xl font-bold mb-4"> Afiliado Automático IA </h1>

<p className="text-slate-300 text-lg max-w-3xl mx-auto">
        Plataforma visual criada para automatizar vendas como afiliado da Shopee e Mercado Livre.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {cards.map((item, index) => (
        <div
          key={index}
          className="bg-white/10 border border-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <div className="text-5xl mb-4">{item.emoji}</div>

          <h2 className="text-2xl font-bold mb-3">
            {item.titulo}
          </h2>

          <p className="text-slate-300 mb-6">
            {item.descricao}
          </p>

          <button className="w-full bg-blue-500 hover:bg-blue-400 transition-all duration-300 rounded-2xl py-3 text-lg font-semibold shadow-lg">
            Executar
          </button>
        </div>
      ))}
    </div>

    <div className="mt-12 bg-white/10 rounded-3xl p-8 border border-white/10 shadow-2xl">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Fluxo Automático Inteligente
      </h2>

      <div className="grid md:grid-cols-4 gap-4 text-center">
        <div className="bg-black/20 rounded-2xl p-5">
          <div className="text-5xl mb-3">🔥</div>
          <p>Produtos Virais</p>
        </div>

        <div className="bg-black/20 rounded-2xl p-5">
          <div className="text-5xl mb-3">🤖</div>
          <p>IA cria conteúdo</p>
        </div>

        <div className="bg-black/20 rounded-2xl p-5">
          <div className="text-5xl mb-3">🎬</div>
          <p>Vídeos automáticos</p>
        </div>

        <div className="bg-black/20 rounded-2xl p-5">
          <div className="text-5xl mb-3">💸</div>
          <p>Comissões diárias</p>
        </div>
      </div>
    </div>

    <div className="mt-10 bg-blue-500/20 border border-blue-400 rounded-2xl p-6 text-center shadow-xl">
      <h3 className="text-2xl font-bold mb-3">
        Sistema pronto
      </h3>

      <p className="text-lg text-slate-200">
        Seu painel visual já está configurado e pronto para futuras automações.
      </p>
    </div>

    <div className="mt-12 text-center text-slate-400 text-sm">
      Desenvolvido para automação de afiliados com inteligência artificial.
    </div>
  </div>
</div>

); }