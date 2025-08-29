import React from 'react';

const SombrasDoAbismoPreview: React.FC = () => {
  return (
    <div style={{ 
      padding: '2rem', 
      backgroundColor: '#121212', 
      color: '#f0f0f0',
      minHeight: '100vh',
      fontFamily: 'Roboto, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '3rem',
        padding: '2rem',
        backgroundColor: 'rgba(24, 24, 24, 0.9)',
        borderRadius: '12px',
        border: '1px solid #2a2a2a'
      }}>
        <h1 style={{
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '3.5rem',
          color: '#f0f0f0',
          letterSpacing: '3px',
          margin: '0 0 1rem 0',
          textShadow: '0 0 10px rgba(50, 205, 50, 0.2)'
        }}>
          Sombras do Abismo
        </h1>
        <p style={{ color: '#ccc', fontStyle: 'italic', fontSize: '1.2rem' }}>
          🎮 Interface Simplificada - Acesso Direto à Ficha do Personagem
        </p>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '2rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ color: '#f0f0f0', fontWeight: 'bold', textDecoration: 'underline' }}>Home</div>
          <div style={{ color: '#32cd32', fontWeight: 'bold' }}>Agentes</div>
          <div style={{ color: '#ffc107', fontWeight: 'bold' }}>Campanhas</div>
          <div style={{ color: '#dc3545', fontWeight: 'bold' }}>Ameaças</div>
          <div style={{ color: '#9b59b6', fontWeight: 'bold' }}>Homebrew</div>
          <div style={{ color: '#6f42c1', fontWeight: 'bold' }}>Patente</div>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        <div style={{
          backgroundColor: 'rgba(24, 24, 24, 0.9)',
          padding: '2rem',
          borderRadius: '12px',
          border: '1px solid #2a2a2a',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            color: '#32cd32', 
            marginBottom: '1rem',
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '2rem'
          }}>
            🎯 Interface Simplificada
          </h2>
          <ul style={{ 
            textAlign: 'left', 
            color: '#ccc',
            lineHeight: '1.8'
          }}>
            <li>✅ <strong style={{color: '#32cd32'}}>Apenas 2 Botões:</strong> "Ver Detalhes" e "Excluir"</li>
            <li>✅ <strong style={{color: '#32cd32'}}>Funcionalidade Unificada:</strong> "Ver Detalhes" abre a ficha</li>
            <li>✅ <strong style={{color: '#32cd32'}}>UX Melhorada:</strong> Menos confusão, mais intuitivo</li>
            <li>✅ <strong style={{color: '#32cd32'}}>Acesso Direto:</strong> Um clique para ver a ficha completa</li>
          </ul>
        </div>

        <div style={{
          backgroundColor: 'rgba(24, 24, 24, 0.9)',
          padding: '2rem',
          borderRadius: '12px',
          border: '1px solid #2a2a2a',
          textAlign: 'center'
        }}>
          <h2 style={{ 
            color: '#32cd32', 
            marginBottom: '1rem',
            fontFamily: 'Bebas Neue, sans-serif',
            fontSize: '2rem'
          }}>
            🎯 Valores RPG Rebalanceados
          </h2>
          <div style={{ textAlign: 'left', color: '#ccc' }}>
            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ color: '#f0f0f0' }}>Artilheiro:</strong> Vida 12, Defesa 8, PA 6
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ color: '#f0f0f0' }}>Colosso:</strong> Vida 20, Defesa 15, PA 3
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ color: '#f0f0f0' }}>Arcanista:</strong> Vida 8, Defesa 6, PA 8
            </div>
            <div>
              <strong style={{ color: '#f0f0f0' }}>Laminante:</strong> Vida 14, Defesa 10, PA 7
            </div>
          </div>
        </div>
      </div>

      <div style={{
        backgroundColor: 'rgba(24, 24, 24, 0.9)',
        padding: '2rem',
        borderRadius: '12px',
        border: '1px solid #2a2a2a',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          color: '#32cd32', 
          marginBottom: '1.5rem',
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '2.5rem'
        }}>
          🚀 Melhorias Implementadas
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          textAlign: 'left'
        }}>
          <div>
            <h3 style={{ color: '#32cd32', marginBottom: '0.5rem' }}>Auto-Avanço</h3>
            <p style={{ color: '#ccc', fontSize: '0.9rem' }}>
              Seleção de classe avança automaticamente para a próxima etapa com transição suave.
            </p>
          </div>
          <div>
            <h3 style={{ color: '#ffc107', marginBottom: '0.5rem' }}>PNGs Reposicionados</h3>
            <p style={{ color: '#ccc', fontSize: '0.9rem' }}>
              Ícones das barras de status posicionados fora das barras com visual melhorado.
            </p>
          </div>
          <div>
            <h3 style={{ color: '#dc3545', marginBottom: '0.5rem' }}>Valores RPG</h3>
            <p style={{ color: '#ccc', fontSize: '0.9rem' }}>
              Atributos rebalanceados para sistema de dados D4-D20 com foco nas especialidades.
            </p>
          </div>
          <div>
            <h3 style={{ color: '#9b59b6', marginBottom: '0.5rem' }}>Ficha Completa</h3>
            <p style={{ color: '#ccc', fontSize: '0.9rem' }}>
              Interface profissional com atributos, perícias, defesa e sistema de combate.
            </p>
          </div>
        </div>
      </div>

      <div style={{
        marginTop: '3rem',
        padding: '2rem',
        backgroundColor: 'rgba(50, 205, 50, 0.1)',
        border: '1px solid #32cd32',
        borderRadius: '12px',
        textAlign: 'center'
      }}>
        <h3 style={{ 
          color: '#32cd32', 
          marginBottom: '1rem',
          fontFamily: 'Bebas Neue, sans-serif',
          fontSize: '1.8rem'
        }}>
          🎮 Interface Final Simplificada
        </h3>
        <p style={{ color: '#ccc', lineHeight: '1.6' }}>
          ✅ <strong>Botões Simplificados:</strong> Apenas "Ver Detalhes" e "Excluir"<br/>
          ✅ <strong>Acesso Direto:</strong> "Ver Detalhes" abre a ficha completa do personagem<br/>
          ✅ <strong>UX Melhorada:</strong> Interface mais limpa e intuitiva<br/>
          ✅ <strong>Funcionalidade Completa:</strong> Todos os recursos mantidos com menos cliques
        </p>
        
        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: 'rgba(50, 205, 50, 0.1)',
          border: '1px solid #32cd32',
          borderRadius: '8px'
        }}>
          <p style={{ color: '#32cd32', margin: 0, fontWeight: 'bold' }}>
            🚀 Teste: Crie um agente e clique em "Ver Detalhes" para acessar a ficha completa!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SombrasDoAbismoPreview;