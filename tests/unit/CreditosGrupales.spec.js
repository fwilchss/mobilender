import { shallowMount } from '@vue/test-utils'
import CreditosGrupales from '@/components/CreditosGrupales.vue'

describe('componente CreditosGrupales.vue', () => {
    it('Revisamos las funciones del componente', () => {
        const wrapper = shallowMount(CreditosGrupales);

        //Revisamos nombre de la función
        expect(wrapper.vm.name)
    })
})
