const SectionTitle = ({title = '', vertical = false}) => {
    return (
        <div style={{writingMode:vertical ? 'vertical-lr' : 'horizontal-tb', textOrientation:'upright', marginBottom:40, marginRight:vertical?'200px':'0'}}>
            <h1 style={{fontSize:72, letterSpacing: vertical ? 10: 20}}>{title}</h1>
        </div>
    )
}

export default SectionTitle