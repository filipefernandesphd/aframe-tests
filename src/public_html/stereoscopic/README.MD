# Stereoscopic

## Versão mais recente

A versão mais recente e compatível com o modo de esterescopia do A-frame é a **1.5.0**. Para habilitá-la, deve usar a propriedade `cardboardModeEnabled`, conforme demonstrado abaixo:

```html
<a-scene xr-mode-ui="cardboardModeEnabled:true">
```

**ATENÇÃO!** Ao ativar o modo de esterescopia, objetos do tipo `a-sphere` ou `geometry="primitive:sphere"` ficarão distorcidos na cena.

## Versão mais antiga

A versão mais antiga e compatível com o modo de esterescopia do A-frame é a **1.2.0**. Não é preciso usar configurações.