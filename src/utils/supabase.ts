import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://medgjshopomybnfeufto.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_E2g1vk3_vz-Y72g9JXrS-Q_D8K-AuxN';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
