const etiquetas = [
    {
        id: '001',
        title: 'Estruras Metálicas',
        desc: 'Planejamento, confecção e condicionamento',
        tag: ['estratificação', 'modelo', 'metalocerâmica', 'fundição'],
    }
,
    {
        id: '002',
        title: '30 de experiência',
        desc: 'Como cheguei até aqui',
        tag: ['educação', 'administração', 'finança'],
    }
,
    {
        id: '003',
        title: 'Desafio Metalurgia',
        desc: 'Os Segredos da Metalurgia Parte 1',
        tag: ['metalocerâmica', 'fundição'],
    }
,
    {
        id: '004',
        title: 'Desafio Metalurgia',
        desc: 'Os Segredos da Metalurgia Parte 2',
        tag: ['modelo', 'equipamentos'],
    }
,
    {
        id: '005',
        title: 'Desafio Metalurgia',
        desc: 'Os Segredos da Metalurgia Parte 3',
        tag: ['modelo', 'equipamentos'],
    }
,
    {
        id: '006',
        title: 'Desafio Metalurgia',
        desc: 'Os Segredos da Metalurgia Parte 4 com José Luiz Tomé',
        tag: ['fundição', 'estrutura'],
    }
,
    {
        id: '007',
        title: 'Desafio Metalurgia',
        desc: 'Os Segredos da Metalurgia Parte 5',
        tag: ['fundição', 'ajustedeforno'],
    }
,
    {
        id: '008',
        title: 'O que não falei sobre Metalurgia',
        desc: '',
        tag: ['dissilicato', 'ajustedeforno'],
    }
,
    {
        id: '009',
        title: 'Metalurgia',
        desc: 'Os segredos de José Luiz Tomé',
        tag: ['estraticicação', 'modelo'],
    }
,
    {
        id: '010',
        title: 'Lentes de Contato',
        desc: 'Analógico vs Digital - Parte 1',
        tag: ['elentsdecontato'],
    }
]
etiquetas.forEach((el) => {
    let template = `<div class="etiqueta ${el.id}">
    <div class="etiqueta_counter">
        <span>Aula</span>
        <span class="etiqueta_id">${el.id}</span>
    </div>
    <div class="etiqueta_descricao">
        <p>${el.title}</p>
        <span>${el.desc}</span>
    </div>
</div>`
document.getElementById('etiquetas').insertAdjacentHTML('beforeend', template)
})
$('.hashtag').on('click', function() {
    $('.hashtag').removeClass('vermelho')
    $(this).addClass('vermelho')
    etiquetas.forEach((el) => {
        
        if (el.tag.includes(this.textContent.replace('#', ''))) {
            $('.etiqueta').removeClass('vermelha')
            $('.etiqueta.'+el.id).addClass('vermelha')
            console.log(this.textContent.replace('#', ''))
            
        }
    })
})

