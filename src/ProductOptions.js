export default function ProductOptions({ $target, initialState, onSelect }) {
    const $select = document.createElement('select');
    //$select.setAttribute('placeholder','선택하세요')
    $target.appendChild($select);

    // 상품 옵션 이름 렌더링 시 상품명 + 옵션명 + 재고: n개
    // 재고 0인 상품의 경우 옵션 선택하지 못하게 함
    //[
    // {
    //     optionId: 1,
    //     optionName: "더미 데이터다! 2",
    //     optionPrice: 15000,
    //     stock: 10
    // },
    //]

    this.state = initialState;

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };

    const createOptionFullName = ({optionName, optionPrice, stock }) => {
        return `${optionName} ${optionPrice > 0 ? `(옵션가 ${optionPrice})` : ''} | ${stock > 0 ? `재고:${stock}개` : '재고없음'}`
    };
    
    $select.addEventListener('change', (e) =>{
        const optionId = parseInt(e.target.value)
        const option = this.state.find(option => option.optionId === optionId);

        console.log(option)

        if(option){
            onSelect(option)
        }
    })

    this.render = () => {
        if (this.state && Array.isArray(this.state)) {
            $select.innerHTML = `
                <option>선택하세요</option>
                ${this.state.map(option => `<option ${option.stock === 0 ? 'disabled' : ''} value="${option.optionId}">${createOptionFullName(option)}</option>`).join('')}
            `;
        }
    };
    

    this.render();
}
