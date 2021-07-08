import { shallowMount } from '@vue/test-utils'
import ControlDeCambios from '@/components/ControlDeCambios.vue'

describe('componente ControlDeCambios.vue', () => {
    it('Revisamos que exista componente', () => {
        const wrapper = shallowMount(ControlDeCambios);

        //Revisamos nombre de la función
        expect(wrapper.name)
    })
})
