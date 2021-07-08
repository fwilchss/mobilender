import { shallowMount } from '@vue/test-utils'
import Inspeccionar from '@/components/Inspeccionar.vue'

describe('componente Inspeccionar.vue', () => {
    it('Revisamos la funcion de carga de imagen', () => {
        const wrapper = shallowMount(Inspeccionar);
        //Revisamos nombre de la función
        expect(wrapper.name)

        //Ejecutamos la funcion que cambiara el valor
        wrapper.vm.getImgUrl();
    }),
    it('Revisamos la funcion de limpiar items', () => {
        const wrapper = shallowMount(Inspeccionar);
        expect(wrapper.name)

        //Ejecutamos la funcion que cambiara el valor
        wrapper.vm.limpiaritems();
    }),
    it('Revisamos la funcion de buscando', () => {
        const wrapper = shallowMount(Inspeccionar);

        //Ejecutamos la funcion que cambiara el valor
        wrapper.vm.buscando();
    })
})
