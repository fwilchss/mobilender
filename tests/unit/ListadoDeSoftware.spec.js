import { shallowMount } from '@vue/test-utils'
import ListadoDeSoftware from '@/components/ListadoDeSoftware.vue'

describe('componente ListadoDeSoftware.vue', () => {
    it('Revisamos las funciones del componente', () => {
        const wrapper = shallowMount(ListadoDeSoftware);

        //Revisamos nombre de la función
        expect(wrapper.vm.name)

        //Ejecutamos la funcion que cambiara el valor
        wrapper.vm.setSoftware();

        //Ejecutamos la funcion que cambiara el valor
        wrapper.vm.listadoDeSoftware();
        
    })
})
