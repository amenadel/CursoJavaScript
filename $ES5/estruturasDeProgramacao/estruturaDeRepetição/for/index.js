                       //ESTRUTURA DE REPETIÇÃO:  Forççando a saida de um loop Break;

                       //As vezes precisamos parar o loop antes que complete todo o seu ciclo;

                       //Para isso utilizamos o break;

                        

                     for(let i = 5; i < 20; i = i + 1)
                     {
                        if(i % 10 == 0)
                        {
                            console.log('Saiu do loop');
                            break;
                        }
                        console.log('Prosseguindo o loop');
                     }