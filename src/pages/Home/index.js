import React, {useState, useEffect} from 'react';
import qs from 'qs'

import { Container, Card, Tamplates, Form, Buttom } from './styles';
import logo from '../../images/logo.svg'

function Home() {
  const [templates, setTemplate] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [boxes, setBoxes] = useState([]);
  const [generetedMeme, setGeneretedMeme] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await fetch('https://api.imgflip.com/get_memes');
      const { data: { memes } } = await resp.json();
      setTemplate(memes)
    })();
  }, []);

  const handleInputChange = (index) => (e) => {
    const newValues = boxes;
    newValues[index] = e.target.value;
    setBoxes(newValues);
  };

  function handleSelectedTemplate(template) {
    setSelectedTemplate(template);
    setBoxes([])
  }

  async function handleSubmit(e){
    e.preventDefault();

    const params = qs.stringify({
      template_id: selectedTemplate.id,
      username: 'micaelmths',
      password: '123456',
      boxes: boxes.map(text => ({text}))

    });
    const resp = await fetch(`https://api.imgflip.com/caption_image?${params}`)
    const {data: {url}} = await resp.json();

    setGeneretedMeme(url)

  }

  function handleReset() {
    setSelectedTemplate(null)
    setBoxes([]);
    setGeneretedMeme(null);
  }

  return (
    <Container>
      <img src={logo} alt="Meme Maker"/>
      <Card>
        {generetedMeme && (
          <>
            <img src={generetedMeme} alt="Generated Meme"/>
            <Buttom type="button" onClick={handleReset}>Criar outro Meme</Buttom>
          </>
        )}
        {!generetedMeme && (
          <>
            <h2>Selecione um template</h2>
            <Tamplates>
              {templates.map((template) => (
                <button 
                  key={template.id}
                  type="button"
                  onClick={() => handleSelectedTemplate(template)}
                  className={template.id === selectedTemplate?.id ? 'selected' : ''}
                >
                <img src={template.url} alt={template.name}/>
              </button>
              ))}
            </Tamplates>

            {selectedTemplate && (
              <>
              <h2>Textos</h2>
                <Form onSubmit={handleSubmit}>
                {(new Array(selectedTemplate.box_count)).fill('').map((_,index) => (
                  <input 
                    key={String(Math.random())}
                    placeholder={`Texto #${index + 1}`}
                    onChange={handleInputChange(index)}
                  />
                ))}
                <Buttom type="submit">Make My Meme!</Buttom>
            </Form>
              </>
            )}
          </>
        )}
      </Card>
    </Container>

  );
}

export default Home;