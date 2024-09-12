// Importa os hooks React useState e useEffect
import React, { useState } from "react";

// Importa os componentes View, Input e IconButton da biblioteca NativeBase
import { IconButton, Input, View } from 'native-base';

// Importa o ícone "add" da biblioteca Ionicons
import { Ionicons } from '@expo/vector-icons';

// Importa o hook useEstadoGlobal do arquivo ../hooks/EstadoGlobal.tsx
import { useEstadoGlobal } from "../hooks/EstadoGlobal";

// Função componente "AdicionarTarefa"
const AdicionarTarefa: React.FC = () => {

  // **useState** - Define o estado local "novaTarefa" para armazenar o título da nova tarefa
  // O estado inicial é uma string vazia ""
  const [novaTarefa, setNovaTarefa] = useState("");

  // **useEstadoGlobal** - Acessa o contexto global de estado e obtém a função "adicionarTarefa"
  // Essa função permite adicionar novas tarefas à lista global
  const { adicionarTarefa } = useEstadoGlobal();

  // **Função handleAdicionarTarefa** - Chamada ao clicar no botão de adicionar tarefa
  const handleAdicionarTarefa = () => {

    // **Verificação** - Se o campo de nova tarefa não estiver vazio (trim() remove espaços em branco)
    if (novaTarefa.trim() !== "") {

      // **Adicionar Tarefa** - Chama a função "adicionarTarefa" do contexto global
      // Passa o título da nova tarefa como parâmetro
      adicionarTarefa(novaTarefa);

      // **Limpar campo** - Após adicionar a tarefa, limpa o campo de nova tarefa
      setNovaTarefa("");
    }
  };

  return (
    <View
      style={{
        backgroundColor: '#1e1e2f', // Cor mais escura para criar contraste
        paddingVertical: 30,
        paddingHorizontal: 25,
        paddingTop: 60,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1, marginRight: 15 }}>
          <Input
            placeholder="Digite uma tarefa"
            placeholderTextColor="#ddd" // Cor de placeholder mais suave
            value={novaTarefa}
            onChangeText={setNovaTarefa}
            fontSize={18}
            color="white"
            bgColor="rgba(255, 255, 255, 0.1)" // Fundo translúcido
            padding={4} // Espaçamento interno maior
            borderWidth={1}
            borderColor="rgba(255, 255, 255, 0.3)" // Borda suave
            borderRadius={10} // Bordas arredondadas
          />
        </View>
        <IconButton
          icon={<Ionicons name="add" size={24} color="white" />}
          onPress={handleAdicionarTarefa}
          style={{
            borderRadius: 50,
            backgroundColor: '#ff9a00',
            padding: 10,
            shadowColor: '#965A00FF',
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.7,
            shadowRadius: 6,
            elevation: 6, // Mais profundidade na sombra
          }}
        />
      </View>
    </View>
  );
};

// Exporta o componente "AdicionarTarefa" para ser usado em outros arquivos
export default AdicionarTarefa;